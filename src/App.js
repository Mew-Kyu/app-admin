import './App.css';
import { useRoutes } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import UserPage from 'containers/UserPage';
import Customer from 'containers/Customer';
import Product from 'containers/Product';
import Order from 'containers/Order';
import Coupon from 'containers/Coupon';
import NotFound from 'containers/404';

function App() {
  return useRoutes([
    { path: "/", element: <Dashboard />,},
    { path: "/user", element: <UserPage />,},
    { path: "/customer", element: <Customer />,},
    { path: "/product", element: <Product />,},
    { path: "/order", element: <Order />,},
    { path: "/coupon", element: <Coupon />,},
    { path: "*", element: <NotFound />}
  ]);
}

export default App;
