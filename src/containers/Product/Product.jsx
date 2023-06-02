import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Button, Layout, Modal, Space, Table, theme } from "antd";
import { AddProduct } from "components/AddProduct/AddProduct";
import { EditProduct } from "components/EditProduct/EditProduct";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
const { Content } = Layout;

const Product = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const productsStore = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.products.fetchProducts();
  }, [dispatch.products]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const newProduct = [
      ...productsStore.listProduct,
      {
        title: values.product.title,
        price: values.product.price,
        category: values.product.category,
        image: values.product.image,
        description: values.product.description,
      },
    ];
    dispatch.products.setListProduct(newProduct);
    setIsModalOpen(false);
  };

  const showConfirmDelete = (record) => {
    const { confirm } = Modal;
    confirm({
      title: "Do you want to delete this product?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        const updatedProducts = productsStore.listProduct.filter(
          (product) => product.title !== record.title
        );
        dispatch.products.setListProduct(updatedProducts);
      },
    });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const onEditProduct = (record) => {
    setIsEditing(true);
    setEditingProduct({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingProduct(null);
  };
  const saveEditingProduct = () => {
    const updatedProducts = productsStore.listProduct.map((product) => {
      if (product.title === editingProduct.title) {
        return editingProduct;
      } else {
        return product;
      }
    });
    dispatch.products.setListProduct(updatedProducts);
  };

  return (
    <>
      <Helmet>
        <title>Product</title>
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
          <AppstoreAddOutlined /> Add Product
        </Button>
        <Table
          style={{ marginTop: "20px" }}
          columns={[
            {
              title: "Product Title",
              dataIndex: "title",
              key: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              key: "price",
            },
            {
              title: "Category",
              key: "category",
              dataIndex: "category",
            },
            {
              title: "Image",
              dataIndex: "image",
              key: "image",
              render: (image) => (
                <img src={image} alt="Product" style={{ width: 100 }} />
              ),
            },
            {
              title: "Description",
              key: "description",
              dataIndex: "description",
            },
            {
              title: "Action",
              key: "action",
              render: (text, record) => (
                <Space size="middle">
                  <EditOutlined
                    onClick={() => onEditProduct(record)}
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
          dataSource={productsStore.listProduct}
        />
        <AddProduct
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          onFinish={onFinish}
        />
        <EditProduct
          isEditing={isEditing}
          editingProduct={editingProduct}
          resetEditing={resetEditing}
          setEditingProduct={setEditingProduct}
          saveEditingProduct={saveEditingProduct}
        />
      </Content>
    </>
  );
};

export default Product;
