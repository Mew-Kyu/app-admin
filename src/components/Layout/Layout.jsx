import {
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
const { Header, Sider } = Layout;

const PrimaryLayout = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical"></div>
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
          </Header>
          {children}
        </Layout>
      </Layout>
    </>
  );
};

export default PrimaryLayout;
