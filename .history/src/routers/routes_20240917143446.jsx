import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

const AboutPage = lazy(() => import('@/pages/AboutPage'));

let routes = {
    expense: [],
    default: [
      {
        path: '/',
        element: <AboutPage />,
      },
    ]
}