export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: '功能面板',
    icon: 'AppstoreAddOutlined',
    path: '/manage',
    component: './Manage',
  },
  {
    hideInMenu: true,
    name: '侧位片投影前端管理',
    icon: 'AppstoreAddOutlined',
    path: '/fmanage',
    component: './Fmanage',
  },
  {
    hideInMenu: true,
    name: '侧位片投影数据管理',
    icon: 'AppstoreAddOutlined',
    path: '/dmanage',
    component: './Dmanage',
  },
  {
    name: '购买产品',
    icon: 'ShoppingCartOutlined',
    path: '/shopping',

    routes: [
      {
        path: '/shopping/buy',
        name: '产品列表',
        icon: 'smile',
        component: './Shopping/Buy',
      },
      {
        path: '/shopping/myservice',
        name: '我的服务',
        icon: 'smile',
        component: './Shopping/Myservice',
      },
      {
        path: '/shopping/record',
        name: '购买记录',
        icon: 'smile',
        component: './Shopping/Shop-record',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
