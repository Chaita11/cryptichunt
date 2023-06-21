"use client";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./register.module.scss";
import {
  UserOutlined,
  LockOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const RegisterComp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.App}>
      <Form className="login-form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="schoolname"
          label="School Name"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="School Name"
            className="input-form"
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            className="input-form"
          />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className="input-form"
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name of the participant"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Full Name"
            className="input-form"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className="input-form"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <Link
            className="text-gray-500 hover:text-gray-400 duration-200 ease-in-out font-medium float-right"
            href="/"
          >
            Forgot password
          </Link> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button text-black dark:text-gray-500"
          >
            Log in
          </Button>
          <p className="reqinv text-black dark:text-white">
            Already Signed Up?{" "}
            <span className="text-back-to-home dark:text-gray-500 hover:text-black dark:hover:text-gray-400">
              <Link href="/login"> Login</Link>
            </span>
          </p>
          <span className="backtohome">
            <Link href="/" className={styles.backtohome}>
              <ArrowLeftOutlined /> back to home
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterComp;
