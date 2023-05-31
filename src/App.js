import './App.css';
// import { useRoutes } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import UserPage from 'containers/UserPage';
import Customer from 'containers/Customer';
import Product from 'containers/Product';
import Order from 'containers/Order';
import Coupon from 'containers/Coupon';
import NotFound from 'containers/404';
import { Routes, Route } from "react-router-dom";
import { PrimaryLayout } from 'components/Layout';
function App() {
  // return useRoutes([
  //   { path: "/", element: <Dashboard />,},
  //   { path: "/user", element: <UserPage />,},
  //   { path: "/customer", element: <Customer />,},
  //   { path: "/product", element: <Product />,},
  //   { path: "/order", element: <Order />,},
  //   { path: "/coupon", element: <Coupon />,},
  //   { path: "*", element: <NotFound />}
  // ]);
  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="user" element={<UserPage />} />
        <Route path="customer" element={<Customer />} />
        <Route path="product" element={<Product />} />
        <Route path="order" element={<Order />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
