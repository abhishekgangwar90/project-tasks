import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

// eslint-disable-next-line import/prefer-default-export
export const appRoutes = {
  public: [
    {
      id: 'login',
      path: '/login',
      component: Login,
      canRedirect: true,
    },
  ],
  private: [
    {
      id: 'dashboard',
      path: '/',
      component: Dashboard,
    },
    {
      id: 'path',
      path: '/profile',
      component: () => {
        return ' <>Hello</>';
      },
    },
  ],
};
