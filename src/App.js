import "./App.css";
// import { useRoutes } from 'react-router-dom';
import Dashboard from "./containers/Dashboard";
import UserPage from "containers/UserPage";
import Customer from "containers/Customer";
import Product from "containers/Product";
import Order from "containers/Order";
import Coupon from "containers/Coupon";
import NotFound from "containers/404";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PrimaryLayout } from "components/Layout";
import Login from "containers/Login";
import { useEffect } from "react";
function App() {
  const token = localStorage.getItem("Token");
  const navigator = useNavigate();
  useEffect(() => {
    if (!token) {
      navigator("/login");
    }
  }, [token, navigator]);
  return (
    <Routes>
      {!token ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<UserPage />} />
          <Route path="customer" element={<Customer />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
