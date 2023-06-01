import { ExportOutlined } from "@ant-design/icons";
import { Button, Layout, Table, theme } from "antd";
import Excel from "components/Excel";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Address",
    key: "address",
    render: (record) =>
      `${record.address.street}, ${record.address.suite}, ${record.address.city}`,
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
  },
];

const Customer = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const customersStore = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.customers.fetchCustomers();
  }, [dispatch.customers]);
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
          overflow: "auto",
        }}
      >
        <Excel
          fileName="export-user"
          data={[
            {
              columns: [
                {
                  title: "User Id",
                  dataIndex: "id",
                  width: 5,
                },
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 20,
                },
                {
                  title: "Email",
                  dataIndex: "email",
                  width: 50,
                },
              ],
              data: customersStore.listCustomer,
              tabName: "info",
            },
            {
              columns: [
                {
                  title: "Name",
                  dataIndex: "username",
                  width: 30,
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                  width: 30,
                },
              ],
              data: customersStore.listCustomer,
              tabName: "contact",
            },
          ]}
        >
          <Button type="primary">
            <ExportOutlined />
            Export Customers
          </Button>
        </Excel>
        <Table
          style={{ marginTop: "20px" }}
          columns={columns}
          dataSource={customersStore.listCustomer}
        />
      </Content>
    </>
  );
};

export default Customer;
