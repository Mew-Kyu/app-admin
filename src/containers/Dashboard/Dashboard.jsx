import { Col, Layout, Row, theme } from "antd";
import { AllocationChart } from "components/AllocationChart";
import { CardD } from "components/CardD";
import { ProfitChart } from "components/ProfitChart";
import { TokenChart } from "components/TokenChart";
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
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TokenChart />
          </Col>
          <Col span={8}>
            <AllocationChart />
          </Col>
          <Col span={16}>
            <ProfitChart />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Dashboard;
