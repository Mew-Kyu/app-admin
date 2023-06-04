import {
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const { Header, Sider } = Layout;

const PrimaryLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const loggedinUser = useSelector((state) => state.auth);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical"
          style={{
            color: "grey",
            display: "flex",
            justifyContent: " center",
            alignItems: "center",
            height: "100px",
            fontSize: "25px",
            fontWeight: "bold",
            fontStyle: "italic",
            textShadow: "0px 8px 10px #000000",
            opacity: 0.6,
          }}
        >
          App-Admin
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <NavLink to="/">
                  <DashboardOutlined />
                </NavLink>
              ),
              label: "Dashboard",
            },
            {
              key: <NavLink to="/user">2</NavLink>,
              icon: (
                <NavLink to="/user">
                  <UserOutlined />
                </NavLink>
              ),
              label: "User",
            },
            {
              key: "3",
              icon: (
                <NavLink to="/customer">
                  <CustomerServiceOutlined />
                </NavLink>
              ),
              label: "Customer",
            },
            {
              key: "4",
              icon: (
                <NavLink to="/product">
                  <ShopOutlined />
                </NavLink>
              ),
              label: "Product",
            },
            {
              key: "5",
              icon: (
                <NavLink to="/order">
                  <ShoppingCartOutlined />
                </NavLink>
              ),
              label: "Order",
            },
            {
              key: "6",
              icon: (
                <NavLink to="/coupon">
                  <ThunderboltOutlined />
                </NavLink>
              ),
              label: "Coupon",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div
            style={{
              marginRight: "10%",
              color: "GrayText",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Welcome, {loggedinUser.username}!
            <LogoutOutlined style={{ paddingLeft: "20px" }} onClick={logOut} />
          </div>
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default PrimaryLayout;
