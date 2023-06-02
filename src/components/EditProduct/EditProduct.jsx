import { Modal, Form, Input } from "antd";

export const EditProduct = ({
  isEditing,
  editingProduct,
  resetEditing,
  setEditingProduct,
  saveEditingProduct,
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
  };

  const handleSave = () => {
    saveEditingProduct();
    resetEditing();
  };

  return (
    <Modal
      title="Edit Product:"
      open={isEditing}
      okText="Save"
      onCancel={resetEditing}
      onOk={handleSave}
    >
      <Form
        {...layout}
        name="nest-messages"
        initialValues={editingProduct}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Product Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingProduct?.title}
            onChange={(e) =>
              setEditingProduct((prevProduct) => ({
                ...prevProduct,
                title: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingProduct?.price}
            onChange={(e) =>
              setEditingProduct((prevProduct) => ({
                ...prevProduct,
                price: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingProduct?.category}
            onChange={(e) =>
              setEditingProduct((prevProduct) => ({
                ...prevProduct,
                category: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Image Link"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingProduct?.image}
            onChange={(e) =>
              setEditingProduct((prevProduct) => ({
                ...prevProduct,
                image: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            value={editingProduct?.description}
            onChange={(e) =>
              setEditingProduct((prevProduct) => ({
                ...prevProduct,
                description: e.target.value,
              }))
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
