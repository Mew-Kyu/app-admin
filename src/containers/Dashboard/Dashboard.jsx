import { Col, Layout, Row, theme } from "antd";
import { CardD } from "components/CardD";
import { Helmet } from "react-helmet";
const { Content } = Layout;
const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
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
    </>
  );
};

export default Dashboard;
