import { queryClient } from './routingStart';

// 내비게이션 구성(navigation configuration)
const navigationItems = [
  {
    id: 'home',
    // lazy load 를 사용할 경우에는 index 프로퍼티를 사용할 수 없습니다.
    // index: true,
    path: '/',
    text: '홈',
    // element: <Home />,
    // react-router-dom 의 lazy load는 아래와 같은 방법으로 사용합니다.
    lazy: async () => {
      const Module = await import('@/pages/Home/Home');
      return { Component: Module.default };
    },

    // loadr와 component 두개를 가져올 때 방법
    // async lazy() {
    //   const { loader, Component } = await import('@/pages/Home/Home');
    //   return {
    //     loader: loader(queryClient),
    //     Component,
    //   };
    // },
  },
  {
    id: 'news',
    path: '/News',
    text: '뉴스',
    lazy: async () => {
      const Module = await import('@/pages/News/News');
      return { Component: Module.default };
    },
  },
  {
    id: 'SignIn',
    path: '/SignIn',
    text: '로그인 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Login/SignIn/page/SignIn');
      return { Component: Module.default };
    },
  },
  {
    id: 'SignUp',
    path: '/SignUp',
    text: '회원가입 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Login/SignUp/page/SignUp');
      return { Component: Module.default };
    },
  },
  {
    id: 'MyPage',
    path: '/MyPage',
    text: '마이페이지',
    lazy: async () => {
      const Module = await import('@/pages/Mypage/MyPage');
      return { Component: Module.default };
    },
  },
  {
    id: 'MypageUserSetting',
    path: '/MypageUserSetting',
    text: '회원설정',
    lazy: async () => {
      const Module = await import('@/pages/Mypage/MypageUserSetting');
      return { Component: Module.default };
    },
  },
  {
    id: 'Product',
    path: '/Product',
    text: '판매 메인페이지',
    lazy: async () => {
      const Module = await import('@/pages/Product/page/Product/Product');
      return { Component: Module.default };
    },
  },
  {
    id: 'ProductDetails',
    path: '/ProductDetails',
    text: '판매 상세페이지',
    lazy: async () => {
      const Module = await import(
        '@/pages/Product/page/ProductDetails/ProductDetails'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'Payment',
    path: '/Payment',
    lazy: async () => {
      const Module = await import('@/pages/Product/page/Payment/Payment');
      return { Component: Module.default };
    },
  },
  {
    id: 'Exchange',
    path: '/Exchange',
    text: '교환페이지',
    lazy: async () => {
      const Module = await import('@/pages/Exchange/Exchange');
      return { Component: Module.default };
    },
  },
  {
    id: 'ExchangeDetails',
    path: '/ExchangeDetails',
    text: '교환 상세페이지',
    lazy: async () => {
      const Module = await import('@/pages/Exchange/ExchangeDetails');
      return { Component: Module.default };
    },
  },
  {
    id: 'Donation',
    path: '/Donation',
    text: '기부페이지',
    lazy: async () => {
      const Module = await import('@/pages/Donation/Donation');
      return { Component: Module.default };
    },
  },
  {
    id: 'ChatScreen',
    path: '/ChatScreen',
    text: '채팅페이지',
    lazy: async () => {
      const Module = await import('@/pages/ChatScreen/ChatScreen');
      return { Component: Module.default };
    },
  },
  {
    id: 'ChatList',
    path: '/ChatList',
    text: '채팅리스트 페이지',
    lazy: async () => {
      const Module = await import('@/pages/ChatScreen/ChatList');
      return { Component: Module.default };
    },
  },
  {
    id: 'KakaoRedirect',
    path: '/oauth',
    text: '카카오로그인 Redirect 페이지',
    lazy: async () => {
      const Module = await import('@/features/SnsService/KakaoRedirect');
      return { Component: Module.default };
    },
  },
];

export default navigationItems;
