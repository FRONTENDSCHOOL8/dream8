// 내비게이션 구성(navigation configuration)
const navigationItems = [
  {
    id: 'home',
    index: true,
    path: '',
    text: '홈',
    // element: <HomePage />,
    lazy: () => import('../pages/Home/Home'),
  },
];

export default navigationItems;
