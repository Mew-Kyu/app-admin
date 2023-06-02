import { Layout, theme } from "antd";
import { Helmet } from "react-helmet";
const { Content } = Layout;
const Order = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          overflow: "auto",
        }}
      >
        Order
      </Content>
    </>
  );
};

export default Order;
