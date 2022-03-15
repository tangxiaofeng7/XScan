export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },

  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },

  {
    path: '/setup',
    icon: 'crown',
    name: '基本配置',
    routes: [
      {
        path: '/setup',
        redirect: '/setup/platform',
      },
      {
        name: '平台配置',
        icon: 'smile',
        path: '/setup/platform',
        component: './PlatformList',
      },
      {
        name: '策略配置',
        icon: 'smile',
        path: '/setup/policy',
        component: './PolicyList',
      },
    ],
  },

  {
    path: '/result',
    icon: 'table',
    name: '资产结果',
    routes: [
      {
        path: '/result',
        redirect: '/result/fofalist',
      },
      {
        name: 'Fofa资产',
        icon: 'smile',
        path: '/result/fofalist',
        component: './FofaList',
      },
      {
        name: 'Hunter资产',
        icon: 'smile',
        path: '/result/hunterlist',
        component: './Hunterlist',
      },
    ],
  },
  {
    path: '/system',
    icon: 'table',
    name: '系统设置',
    routes: [
      {
        path: '/system',
        redirect: '/system/account',
      },
      {
        name: '修改密码',
        icon: 'smile',
        path: '/system/account',
        component: './System/account',
      },
      {
        name: '服务器状态',
        icon: 'smile',
        path: '/system/state',
        component: './System/state',
      },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
