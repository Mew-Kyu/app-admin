import { PrimaryLayout } from "components/Layout";
import { Layout, theme } from "antd";
const { Content } = Layout;
const Coupon = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <PrimaryLayout title={"Coupon"}>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Coupon
        </Content>
      </PrimaryLayout>
    </>
  );
};

export default Coupon;
