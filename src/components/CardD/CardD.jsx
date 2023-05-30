import { Card, Col, Row } from "antd";

export const CardD = () => {
  return (
    <>
      <Row gutter={24}>
        <Col span={8}>
          <Card
            style={{
              backgroundColor: "#0093E9",
              backgroundImage:
                "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%",
              color: "#fff",
            }}
            bordered={false}
          >
            <p>01</p>
            <p>Total Users</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              backgroundColor: "#85FFBD",
              backgroundImage:
                "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
              color: "#fff",
            }}
            bordered={false}
          >
            <p>01</p>
            <p>Total Products</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              backgroundColor: "#FBAB7E",
              backgroundImage:
                "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              color: "#fff",
            }}
            bordered={false}
          >
            <p>01</p>
            <p>Total Orders</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};
