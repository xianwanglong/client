import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '后台',
  },
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '列表',
      path: '/games',
      component: './Games',
    },
  ],
  npmClient: 'yarn',
});

