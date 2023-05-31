import { Layout, theme } from "antd";
import { Helmet } from "react-helmet";
const { Content } = Layout;
const Product = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        Product
      </Content>
    </>
  );
};

export default Product;
