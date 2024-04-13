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
  },
  {
    id: 'news',
    path: '/News',
    text: '뉴스',
    // lazy: async () => {
    //   const Module = await import('@/components/05_pages/News/News/News');
    //   return { Component: Module.default };
    // },
    async lazy() {
      const { loader, News } = await import(
        '@/components/05_pages/News/News/News'
      );
      return {
        loader: loader(queryClient),
        Component: News,
      };
    },
  },
  {
    id: 'newsDetails',
    path: '/NewsDetails/:newsId',
    text: '뉴스 내용',
    // lazy: async () => {
    //   const Module = await import(
    //     '@/components/05_pages/News/NewsDetails/NewsDetails'
    //   );
    //   return { Component: Module.default };
    // },
    async lazy() {
      const { loader, NewsDetail } = await import(
        '@/components/05_pages/News/NewsDetails/NewsDetails'
      );
      return {
        loader: loader(queryClient),
        Component: NewsDetail,
      };
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
    id: 'Mypage',
    path: '/Mypage',
    text: '마이페이지',

    async lazy() {
      const { Mypage } = await import('@/components/05_pages/Mypage/Mypage');
      return {
        // loader: loader(queryClient),
        Component: Mypage,
      };
    },

    children: [
      {
        //이름 MypageUserSetting
        // 회원정보
        // index: true,
        // async lazy() {
        //   const { MypageUserSetting } = await import(
        //     '@/components/02_molecules/Mypage/MypageUserSetting'
        //   );
        //   console.log('MypageUserSetting  ', MypageUserSetting);
        //   return { Component: MypageUserSetting };
        // },

        // 회원정보
        index: true,
        lazy: () =>
          import('@/components/02_molecules/Mypage/MypageUserSetting'),
      },

      {
        // 구매내역
        // path: 'purchase',
        // lazy: () =>
        //   import('@/components/02_molecules/Mypage/MypageTransaction'),
        // loader: async () => {
        //   return queryClient.ensureQueryData({
        //     queryKey: ['my_cart'],
        //     queryFn: async () => {
        //       return await pb
        //         .collection('my_cart')
        //         .getFullList({ expand: 'userId, productId' });
        //     },
        //     // staleTime: 1000 * 10, // 10s
        //   });
        // },

        text: '구매내역',
        path: 'purchase',
        async lazy() {
          const { loader, MypageTransaction } = await import(
            '@/components/02_molecules/Mypage/MypageTransaction'
          );
          return {
            loader: loader(queryClient),
            Component: MypageTransaction,
          };
        },
      },
      {
        text: '교환내역',
        path: 'exchange',
        async lazy() {
          const { loader, MypageExchange } = await import(
            '@/components/02_molecules/Mypage/MypageExchange'
          );
          return {
            loader: loader(queryClient),
            Component: MypageExchange,
          };
        },
      },
      {
        text: '후원내역',
        path: 'donation',
        async lazy() {
          const { loader, MypageSponsorship } = await import(
            '@/components/02_molecules/Mypage/MypageSponsorship'
          );
          return {
            loader: loader(queryClient),
            Component: MypageSponsorship,
          };
        },
      },
    ],
  },
  {
    id: 'Product',
    path: '/Product',
    text: '판매 메인페이지',
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
    path: '/ProductDetails/:productId/:productCategory',
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
    text: '교환 메인페이지',
    async lazy() {
      const { loader, Exchange } = await import(
        '@/components/05_pages/Exchange/Exchange'
      );
      return {
        loader: loader(queryClient),
        Component: Exchange,
      };
    },
  },
  {
    id: 'ExchangeWrite',
    path: '/ExchangeWrite',
    text: '교환 작성 페이지',
    async lazy() {
      const { loader, ExchangeWrite } = await import(
        '@/components/05_pages/Exchange/ExchangeWrite'
      );
      return {
        loader: loader(queryClient),
        Component: ExchangeWrite,
      };
    },
  },
  {
    id: 'ExchangeModify',
    path: '/ExchangeModify/:id',
    text: '교환 수정 페이지',
    async lazy() {
      const { loader, ExchangeModify } = await import(
        '@/components/05_pages/Exchange/ExchangeModify'
      );
      return {
        loader: loader(queryClient),
        Component: ExchangeModify,
      };
    },
  },
  {
    id: 'ExchangeDetail',
    path: '/Exchange/ExchangeDetail/:id',
    text: '교환 메인페이지',
    async lazy() {
      const { loader, ExchangeDetail } = await import(
        '@/components/05_pages/Exchange/ExchangeDetail'
      );
      return {
        loader: loader(queryClient),
        Component: ExchangeDetail,
      };
    },
  },
  {
    id: 'Chat',
    path: '/Chat/:id',
    text: '채팅 페이지',
    lazy: async () => {
      const Module = await import('@/components/05_pages/Exchange/Chat/Chat');
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
  // {
  //   id: 'ChatScreen',
  //   path: '/ChatScreen',
  //   text: '채팅페이지',
  //   lazy: async () => {
  //     const Module = await import('@/pages/ChatScreen/ChatScreen');
  //     return { Component: Module.default };
  //   },
  // },
  // {
  //   id: 'ChatList',
  //   path: '/ChatList',
  //   text: '채팅리스트 페이지',
  //   lazy: async () => {
  //     const Module = await import('@/pages/ChatScreen/ChatList');
  //     return { Component: Module.default };
  //   },
  // },
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
