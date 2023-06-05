import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import bg from "assets/bg-login.jpg";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth);

  const onFinish = (values) => {
    if (
      values.username === authStore.username &&
      values.password === authStore.password
    ) {
      dispatch.auth.setUsername(values.username);
      localStorage.setItem("Token", "61d181h92d33");
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Space
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Form
          style={{
            background: "black",
            opacity: 0.8,
            padding: "50px",
            borderRadius: "15px",
            color: "white",
          }}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1>Login</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "lightblue" }}>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot">Forgot password</Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link>register now!</Link>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
};

export default Login;
