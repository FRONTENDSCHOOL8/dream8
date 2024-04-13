export const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY; //REST API KEY
export const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI; //Redirect URI
export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
