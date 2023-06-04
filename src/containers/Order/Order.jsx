import { FormOutlined } from "@ant-design/icons";
import { Layout, Modal, Select, Space, Table, Tag, theme } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;
const Order = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useDispatch();
  const ordersStore = useSelector((state) => state.orders);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateOrder, setUpdateOrder] = useState(null);
  const onUpdateOrder = (record) => {
    setIsUpdate(true);
    setUpdateOrder({ ...record });
  };
  const resetUpdate = () => {
    setIsUpdate(false);
    setUpdateOrder(null);
  };
  const saveUpdateOrder = () => {
    const updatedOrders = ordersStore.listOrder.map((order) => {
      if (order.id === updateOrder.id) {
        return updateOrder;
      } else {
        return order;
      }
    });
    console.log(updateOrder);
    dispatch.orders.setListOrder(updatedOrders);
  };

  const handleSave = () => {
    saveUpdateOrder();
    resetUpdate();
  };
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
        <Table
          style={{ marginTop: "20px" }}
          columns={[
            {
              title: "Order ID",
              dataIndex: "id",
              key: "id",
            },
            {
              title: "Bill ID",
              dataIndex: "billid",
              key: "billid",
            },
            {
              title: "Email",
              dataIndex: "email",
              key: "email",
            },
            {
              title: "Status",
              key: "status",
              dataIndex: "status",
              render: (status) => (
                <>
                  {status.map((tag) => {
                    let color = tag === "pending" ? "geekblue" : "green";
                    if (tag === "cancelled") {
                      color = "volcano";
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: "Update",
              key: "udpate",
              render: (text, record) => (
                <Space size="middle">
                  <FormOutlined
                    onClick={() => onUpdateOrder(record)}
                    style={{ color: "purple" }}
                  />
                </Space>
              ),
            },
          ]}
          dataSource={ordersStore.listOrder}
        />
        <Modal
          title="Update Order Status:"
          open={isUpdate}
          okText="Save"
          onCancel={resetUpdate}
          onOk={handleSave}
        >
          <Select
            defaultValue={updateOrder?.status}
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
            options={[
              {
                value: "success",
                label: "Success",
              },
              {
                value: "pending",
                label: "Pending",
              },
              {
                value: "cancelled",
                label: "Cancelled",
              },
            ]}
          />
        </Modal>
      </Content>
    </>
  );
};

export default Order;
