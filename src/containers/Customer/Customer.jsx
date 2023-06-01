import { Layout, theme } from "antd";
import { Helmet } from "react-helmet";
const { Content } = Layout;
const Customer = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Helmet>
        <title>Customer</title>
      </Helmet>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        Customer
      </Content>
    </>
  );
};

export default Customer;
