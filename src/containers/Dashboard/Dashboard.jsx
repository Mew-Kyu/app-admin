import { PrimaryLayout } from "components/Layout";
import { Col, Layout, Row, theme } from "antd";
import { CardD } from "components/CardD";
const { Content } = Layout;
const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <PrimaryLayout title={"Dashboard"}>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col span={24}>
              <CardD />
            </Col>
            <Col span={24}>{/* <ChartD /> */}</Col>
          </Row>
        </Content>
      </PrimaryLayout>
    </>
  );
};

export default Dashboard;
