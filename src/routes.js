import { Navigate } from 'react-router-dom';
import { Layout, MainLayout } from './components';
import {
  Account,
  AddProduct,
  Customer,
  Dashboard,
  Expense,
  Income,
  Login,
  NotFound,
  Product,
  Register,
  Settings
} from './pages';

const routes = [
  {
    path: 'app',
    element: <Layout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <Customer /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <Product /> },
      { path: 'settings', element: <Settings /> },
      { path: 'pemasukan', element: <Income /> },
      { path: 'pengeluaran', element: <Expense /> },
      { path: 'add-product', element: <AddProduct /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
