import { REDIRECT_URI, REST_API_KEY } from '@/api/SocialKakao';
import { useKakaoStore } from '@/store/useKakaoStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import create from 'zustand';
import PocketBase from 'pocketbase';

/*kakao Redirect 화면 */
function KakaoRedirect() {
  const navigateTo = useNavigate();
  const { setAccessToken } = useKakaoStore();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grantType = 'authorization_code';
    const rest_api_key = REST_API_KEY;
    const redirect_uri = REDIRECT_URI;

    async function getOAuth2() {
      const pb = new PocketBase('https://dream.pockethost.io');
      const authMethods = await pb.collection('users').listAuthMethods();
      console.log('authMethods ', authMethods);

      const authLogin = await pb.collection('users').authWithOAuth2({
        provider: 'kakao',
        code: code,
        codeVerifier: authMethods.authProviders[0].codeVerifier,
        redirectUrl: redirect_uri,
      });
      console.log('authLogin  ', authLogin);
    }
    getOAuth2();

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
        console.log(access_token);
        // zustand를 사용하여 access token 상태를 업데이트합니다.
        fetch('https://kapi.kakao.com/v2/user/me', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('2번째', data);
            navigateTo('/');
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setAccessToken]);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
}

export default KakaoRedirect;
