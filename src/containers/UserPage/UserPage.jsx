import { PrimaryLayout } from "components/Layout";
import { Layout, theme } from "antd";
const { Content } = Layout;
const UserPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <PrimaryLayout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          User
        </Content>
      </PrimaryLayout>
    </>
  );
};

export default UserPage;
