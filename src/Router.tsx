import { createBrowserRouter } from 'react-router';
import { ErrorPage } from './pages/Error/ErrorPage';
import { HomePage } from './pages/Home/HomePage';
import { DestinationPage } from './pages/Destination/DestinationPage';
import { DestinationDetailPage } from './pages/Destination/DestinationDetailPage';
import { AboutPage } from './pages/About/AboutPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { Layout } from './layout/Layout';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/DestinationPage',
          element: <DestinationPage />,
        },
        {
          path: '/destination/:id',
          element: <DestinationDetailPage />,
        },
        {
          path: '/AboutPage',
          element: <AboutPage />,
        },
        {
          path: '/ContactPage',
          element: <ContactPage />,
        },
      ],
    },
  ],
  {
    basename: '/AtlantisFrame', // Important for gh-pages!
  }
);
