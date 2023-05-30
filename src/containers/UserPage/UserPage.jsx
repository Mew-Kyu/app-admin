import {
  DeleteOutlined,
  EditOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { PrimaryLayout } from "components/Layout";
import {
  Layout,
  theme,
  Space,
  Table,
  Tag,
  Button,
  Modal,
  Form,
  Input,
} from "antd";
import { useState } from "react";
const { Content } = Layout;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
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
    title: "Username",
    dataIndex: "username",
    sorter: (a, b) => a.username.length - b.username.length,
    sortDirections: ["descend"],
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.phone - b.phone,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <UserSwitchOutlined />
        </a>
        <a>
          <EditOutlined style={{ color: "yellowgreen" }} />
        </a>
        <a>
          <DeleteOutlined style={{ color: "red" }} />
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    username: "johnau",
    phone: "0" + 969789654,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    username: "jimxanh",
    phone: "0" + 869789651,
    address: "London No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "3",
    name: "Joe Black",
    username: "joeden",
    phone: "0" + 769786652,
    address: "Sydney No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "4",
    name: "Jim Red",
    username: "jimdo",
    phone: "0" + 369789123,
    address: "London No. 2 Lake Park",
    tags: ["loser"],
  },
];

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const UserPage = () => {
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

  const [users, setUsers] = useState(data);
  const onFinish = (values) => {
    // console.log(values);
    const newUser = {
      key: (users.length + 1).toString(), // Generate a unique key for the new user
      name: values.user.name,
      username: values.user.username,
      phone: values.user.phone,
      address: values.user.address,
      tags: ["nice", "developer"], // Add any default tags as needed
    };
    // Update the users state with the new user
    setUsers([...users, newUser]);
    setIsModalOpen(false); // Close the modal after submitting the form
  };
  return (
    <>
      <PrimaryLayout title={"User"}>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Button onClick={showModal} type="primary">
            Add User
          </Button>
          <Table columns={columns} dataSource={users} onChange={onChange} />
        </Content>
        <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
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
              name={["user", "username"]}
              label="Username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "address"]}
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]}
              label="Phone Number"
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
      </PrimaryLayout>
    </>
  );
};

export default UserPage;
