import {
  ExclamationCircleFilled,
  DeleteOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Layout, Modal, Space, Table, theme } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  /* eslint-disable no-template-curly-in-string */
  required: "${label} is required!",
};

const Coupon = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const couponsStore = useSelector((state) => state.coupons);

  const onFinish = (values) => {
    const newCoupon = [
      ...couponsStore.listCoupon,
      {
        code: values.coupon.code,
        description: values.coupon.description,
      },
    ];
    dispatch.coupons.setListCoupon(newCoupon);
    setIsModalOpen(false);
  };

  const showConfirmDelete = (record) => {
    const { confirm } = Modal;
    confirm({
      title: "Do you want to delete this coupon?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        const updatedCoupons = couponsStore.listCoupon.filter(
          (coupon) => coupon.code !== record.code
        );
        dispatch.coupons.setListCoupon(updatedCoupons);
      },
    });
  };
  return (
    <>
      <Helmet>
        <title>Coupon</title>
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
        <Button onClick={showModal} type="primary">
          <FolderAddOutlined /> Add Coupon
        </Button>
        <Table
          style={{ marginTop: "20px" }}
          columns={[
            {
              title: "Coupon Code",
              dataIndex: "code",
              key: "code",
            },
            {
              title: "Description",
              dataIndex: "description",
              key: "description",
            },
            {
              title: "Delete",
              key: "delete",
              render: (text, record) => (
                <Space size="middle">
                  <DeleteOutlined
                    onClick={() => showConfirmDelete(record)}
                    style={{ color: "red" }}
                  />
                </Space>
              ),
            },
          ]}
          dataSource={couponsStore.listCoupon}
        />
        <Modal
          title="Add a new coupon:"
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["coupon", "code"]}
              label="Coupon code"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["coupon", "description"]}
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </>
  );
};

export default Coupon;
