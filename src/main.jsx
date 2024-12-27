import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './layout/Layout';
import EmailHeaderFiltering from './pages/EmailHeaderFiltering';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Layout title="Email Header Filtering" />,
        children: [
          {
            path: '',
            element: <EmailHeaderFiltering />,
          },
        ]
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
