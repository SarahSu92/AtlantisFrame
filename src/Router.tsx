import { createBrowserRouter } from 'react-router';
import { ErrorPage } from './pages/Error/ErrorPage';
import { HomePage } from './pages/Home/HomePage';
import { DestinationPage } from './pages/Destination/DestinationPage';
import { DestinationDetailPage } from './pages/Destination/DestinationDetailPage';
import { AboutPage } from './pages/About/AboutPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { Layout } from './layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: (
            <>
              <ScrollToTop />
              <HomePage />
            </>
          ),
        },
        {
          path: '/DestinationPage',
          element: (
            <>
            <ScrollToTop />
            <DestinationPage />
            </>
          ),
        },
        {
          path: '/destination/:id',
          element: (
            <>
             <ScrollToTop />
             <DestinationDetailPage />
            </>
          ),
        },
        {
          path: '/AboutPage',
          element: (
            <>
            <ScrollToTop />
            <AboutPage />
            </>
          ),
        },
        {
          path: '/ContactPage',
          element: (
            <>
            <ScrollToTop />
            <ContactPage />
            </>
          ),
        },
      ],
    },
  ],
  {
    basename: '/AtlantisFrame', // Important for gh-pages!
  }
);
