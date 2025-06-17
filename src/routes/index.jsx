import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Customers from '../pages/Customers';
import Products from '../pages/Products';
import Settings from '../pages/Settings';
import Help from '../pages/Help';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'help',
        element: <Help />,
      },
    ],
  },
]);