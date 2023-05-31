import { Modal, Form, Input } from "antd";

export const UpdateUser = ({
  isEditing,
  editingUser,
  resetEditing,
  setEditingUser,
  saveEditingUser,
}) => {
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
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const handleSave = () => {
    saveEditingUser();
    resetEditing();
  };

  return (
    <Modal
      title="Edit User:"
      open={isEditing}
      okText="Save"
      onCancel={resetEditing}
      onOk={handleSave}
    >
      <Form
        {...layout}
        name="nest-messages"
        initialValues={editingUser}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingUser?.username}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                username: e.target.value,
              }))
            }
          />
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
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingUser?.name}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                name: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input
            value={editingUser?.email}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                email: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingUser?.address}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                address: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingUser?.phone}
            onChange={(e) =>
              setEditingUser((prevUser) => ({
                ...prevUser,
                phone: e.target.value,
              }))
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
