import { REDIRECT_URI, KAKAO_API_KEY } from '@/api/SocialKakao';
import { useKakaoStore } from '@/store/useKakaoStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PocketBase from 'pocketbase';
import useLoginFormStore from '@/store/useLoginFormStore';
import { LoadingSpinner } from '@/components/Loading/Loading';

/*kakao Redirect 화면 */
function KakaoRedirect() {
  const navigateTo = useNavigate();
  const { setAccessToken, setuserData } = useKakaoStore();
  const { setUserInfo } = useLoginFormStore();
  const { setisSocialLoggedIn } = useKakaoStore();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grantType = 'authorization_code';
    const rest_api_key = KAKAO_API_KEY;
    const redirect_uri = REDIRECT_URI;

    async function getOAuth2() {
      const pb = new PocketBase('https://dream.pockethost.io');
      const authMethods = await pb.collection('users').listAuthMethods();
      console.log('authMethods ', authMethods);

      const authLogin = await pb.collection('users').authWithOAuth2({
        provider: 'kakao',
        // code: code,
        // codeVerifier: authMethods.authProviders[0].codeVerifier,
        // redirectUrl: redirect_uri,
      });
      console.log('authLogin  ', authLogin);

      return authLogin;
    }

    getOAuth2().then(() => {
      fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { access_token } = data;
          setAccessToken(access_token);

          fetch('https://kapi.kakao.com/v2/user/me', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${access_token}`,
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('유저 data', data);
              setuserData(data);

              async function fetchDataAndHandleUpdate() {
                try {
                  const nowId = await nowLoginId();
                  Updatehandler(nowId);
                } catch (error) {
                  console.error('Error fetching nowId: ', error);
                }
              }

              async function nowLoginId() {
                const nowIdRaw = localStorage.getItem('pocketbase_auth');
                console.log('nowIdRaw: ', nowIdRaw);

                const nowId = nowIdRaw ? JSON.parse(nowIdRaw).model.id : null;
                return nowId;
              }

              async function Updatehandler(nowId) {
                const pb = new PocketBase('https://dream.pockethost.io');

                const kakaData = {
                  nickName: data.kakao_account.profile.nickname,
                  email: data.kakao_account.email,
                };
                try {
                  await pb.collection('users').update(nowId, kakaData);

                  setUserInfo(data);
                  setUserInfo(pb.authStore.model);
                  setisSocialLoggedIn(true);
                } catch (error) {
                  console.error('유저 레코드 업데이트 에러: ', error);
                }

                navigateTo('/Mypage');
              }

              fetchDataAndHandleUpdate();
            });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, [setAccessToken]);

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}

export default KakaoRedirect;
