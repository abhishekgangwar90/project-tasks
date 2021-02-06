import Login from '../pages/Login';

// eslint-disable-next-line import/prefer-default-export
export const appRoutes = [
  {
    id: '/',
    path: '/',
    component: () => {
      return 'base';
    },
  },
  {
    id: 'login',
    path: '/login',
    component: Login,
  },
  {
    id: 'profile',
    path: '/profile',
    component: () => {
      return 'profile';
    },
  },
];
