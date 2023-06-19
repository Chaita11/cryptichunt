"use client";

import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "../landing/landing.scss";
import { useRouter } from "next/navigation";
const LoginDashboard = () => {
  const router = useRouter();
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Access form data
    const formData = new FormData(event.target);
    const user = formData.get("user");
    const password = formData.get("password");

    // Perform login logic (e.g., send login request to server)

    // Console.log the login information
    console.log("ID:", user);
    console.log("Password:", password);

    // Reset the form
    event.target.reset();

    // Perform the router push to the desired page
    router.push("/dashboard");
  };
  return (
    <form className="flex flex-col gap-4 mt-5" onSubmit={handleLoginSubmit}>
      {/* 1st */}

      <input
        type="text"
        id="user"
        name="user"
        className="input-form"
        placeholder="ID"
      />

      {/* 2nd */}
      <input
        type="password"
        id="password"
        name="password"
        className="input-form"
        placeholder="Password"
      />

      <button
        type="submit"
        className="form-button text-gray-500 bg-login-button hover:bg-login-button-hover animation duration-200 ease-in-out rounded font-semibold "
      >
        Login
      </button>
    </form>
    // <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 16,
    //   }}
    //   style={{
    //     maxWidth: 600,
    //   }}
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your username!",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please input your password!",
    //       },
    //     ]}
    //   >
    //     <Input.Password />
    //   </Form.Item>

    //   <Form.Item
    //     name="remember"
    //     valuePropName="checked"
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Checkbox>Remember me</Checkbox>
    //   </Form.Item>

    //   <Form.Item
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};

export default LoginDashboard;
