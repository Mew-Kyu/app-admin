import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  UserSwitchOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { PrimaryLayout } from "components/Layout";
import { Layout, theme, Space, Table, Tag, Button, Modal } from "antd";
import AddUser from "components/AddUser";
import UpdateUser from "components/UpdateUser";

const { Content } = Layout;

const data = [
  {
    key: "1",
    name: "John Brown",
    username: "johnau",
    email: "johnau@gmail.com",
    phone: "0" + 969789654,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    username: "jimxanh",
    email: "jimxanh@gmail.com",
    phone: "0" + 869789651,
    address: "London No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "3",
    name: "Joe Black",
    username: "joeden",
    email: "joeden@gmail.com",
    phone: "0" + 769786652,
    address: "Sydney No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "4",
    name: "Jim Red",
    username: "jimdo",
    email: "jimdo@gmail.com",
    address: "London No. 2 Lake Park",
    tags: ["loser"],
  },
];

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
    const newUser = {
      key: (users.length + 1).toString(),
      name: values.user.name,
      username: values.user.username,
      email: values.user.email,
      phone: values.user.phone,
      address: values.user.address,
      tags: ["nice", "developer"],
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
  };

  const showConfirmDelete = (record) => {
    const { confirm } = Modal;
    confirm({
      title: "Do you want to delete this user?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        const updatedUsers = users.filter((user) => user.key !== record.key);
        setUsers(updatedUsers);
      },
    });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const onEditUser = (record) => {
    setIsEditing(true);
    setEditingUser({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const saveEditingUser = () => {
    setUsers((prevUser) =>
      prevUser.map((user) => {
        if (user.key === editingUser.key) {
          return editingUser;
        } else {
          return user;
        }
      })
    );
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
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
          <Table
            style={{ overflow: "auto" }}
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ["descend"],
              },
              {
                title: "Tags",
                key: "tags",
                dataIndex: "tags",
                render: (tags) => (
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
                title: "Email",
                dataIndex: "email",
                sorter: (a, b) => a.email.localeCompare(b.email),
                sortDirections: ["descend", "ascend"],
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
              },
              {
                title: "Action",
                key: "action",
                render: (text, record) => (
                  <Space size="middle">
                    <UserSwitchOutlined style={{ color: "blueviolet" }} />
                    <EditOutlined
                      onClick={() => onEditUser(record)}
                      style={{ color: "yellowgreen" }}
                    />
                    <DeleteOutlined
                      onClick={() => showConfirmDelete(record)}
                      style={{ color: "red" }}
                    />
                  </Space>
                ),
              },
            ]}
            dataSource={users}
            onChange={onChange}
          />
        </Content>
        <AddUser
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          onFinish={onFinish}
        />
        <UpdateUser
          isEditing={isEditing}
          editingUser={editingUser}
          resetEditing={resetEditing}
          setEditingUser={setEditingUser}
          saveEditingUser={saveEditingUser}
        />
      </PrimaryLayout>
    </>
  );
};

export default UserPage;
