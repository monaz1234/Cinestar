import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

// Định nghĩa các route với lazy loading
const AboutPage = lazy(() => import('@/pages/AboutPage'));

const routes = [
  {
    path: '/',
    element: <AboutPage />,
  },
  // Các route khác...
];

function AppRouter() {
  const element = useRoutes(routes);
  return element;
}

export default AppRouter;
