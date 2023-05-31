import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  UserSwitchOutlined,
  ExclamationCircleFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, theme, Space, Table, Tag, Button, Modal } from "antd";
import AddUser from "components/AddUser";
import UpdateUser from "components/UpdateUser";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
const { Content } = Layout;

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

  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users);

  const onFinish = (values) => {
    const newUser = [
      ...usersStore.listUser,
      {
        key: (usersStore.length + 1).toString(),
        name: values.user.name,
        username: values.user.username,
        email: values.user.email,
        phone: values.user.phone,
        address: values.user.address,
        tags: ["nice", "developer"],
      },
    ];
    dispatch.users.setListUser(newUser);
    setIsModalOpen(false);
  };

  const showConfirmDelete = (record) => {
    const { confirm } = Modal;
    confirm({
      title: "Do you want to delete this user?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        const updatedUsers = usersStore.listUser.filter(
          (user) => user.key !== record.key
        );
        dispatch.users.setListUser(updatedUsers);
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
    const updatedUsers = usersStore.listUser.map((user) => {
      if (user.key === editingUser.key) {
        return editingUser;
      } else {
        return user;
      }
    });
    dispatch.users.setListUser(updatedUsers);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Helmet>
        <title>User</title>
      </Helmet>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        <Button onClick={showModal} type="primary">
          <UserAddOutlined /> Add User
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
          dataSource={usersStore.listUser}
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
    </>
  );
};

export default UserPage;
