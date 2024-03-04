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
      const Module = await import('@/components/05_pages/Home/Home');
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
      const Module = await import('@/components/05_pages/News/News/News');
      return { Component: Module.default };
    },
  },
  {
    id: 'newsDetails',
    path: '/NewsDetails',
    text: '뉴스 내용',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/News/NewsDetails/NewsDetails'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'SignIn',
    path: '/SignIn',
    text: '로그인 페이지',
    lazy: async () => {
      const Module = await import('@/components/05_pages/SignIn/SignIn');
      return { Component: Module.default };
    },
  },
  {
    id: 'SignUp',
    path: '/SignUp',
    text: '회원가입 페이지',
    lazy: async () => {
      const Module = await import('@/components/05_pages/SignUp/SignUp');
      return { Component: Module.default };
    },
  },
  {
    id: 'MyPage',
    path: '/MyPage',
    text: '마이페이지',
    lazy: async () => {
      const Module = await import('@/components/05_pages/Mypage/MyPage');
      return { Component: Module.default };
    },
  },
  {
    id: 'MypageUserSetting',
    path: '/MypageUserSetting',
    text: '회원설정',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/Mypage/MypageUserSetting'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'Product',
    path: '/Product',
    text: '판매 메인페이지',
    // lazy: async () => {
    //   const Module = await import(
    //     '@/components/05_pages/Product/Product/Product'
    //   );
    //   return { Component: Module.default };
    // },
    async lazy() {
      const { loader, Product } = await import(
        '@/components/05_pages/Product/Product/Product'
      );
      return {
        loader: loader(queryClient),
        Component: Product,
      };
    },
  },
  {
    id: 'ProductDetails',
    path: '/ProductDetails/:productId',
    text: '판매 상세페이지',
    async lazy() {
      const { loader, ProductDetails } = await import(
        '@/components/05_pages/Product/ProductDetails/ProductDetails'
      );
      return {
        loader: loader(queryClient),
        Component: ProductDetails,
      };
    },
  },
  {
    id: 'Payment',
    path: '/Payment',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/Product/Payment/Payment'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'Exchange',
    path: '/Exchange',
    text: '교환페이지',
    lazy: async () => {
      const Module = await import('@/components/05_pages/Exchange/Exchange');
      return { Component: Module.default };
    },
  },
  {
    id: 'ExchangeWrite',
    path: '/ExchangeWrite',
    text: '교환페이지',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/Exchange/ExchangeWrite'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'ExchangeDetail',
    path: '/Exchange/ExchangeDetail/:id',
    text: '교환 상세페이지',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/Exchange/ExchangeDetail'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'Donation',
    path: '/Donation',
    text: '기부페이지',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/Donation/Donation/Donation'
      );
      return { Component: Module.default };
    },
  },
  {
    id: 'DonationForm',
    path: '/DonationForm',
    text: '기부페이지',
    lazy: async () => {
      const Module = await import(
        '@/components/05_pages/Donation/DonationSubmission/DonationSubmission'
      );
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
    path: '/KakaoRedirect',
    text: '카카오로그인 Redirect 페이지',
    lazy: async () => {
      const Module = await import('@/features/SnsService/KakaoRedirect');
      return { Component: Module.default };
    },
  },
];

export default navigationItems;
