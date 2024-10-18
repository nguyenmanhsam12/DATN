import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useNavigate } from "react-router-dom"; 
import axios from "../../../configs/axios";
import { useMutation } from '@tanstack/react-query';
import { useLocalStorage } from "../../../common/hooks/userStorage";

const Register = () => {
  const [setUser] = useLocalStorage("user", {})
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const { mutate } = useMutation({
    mutationFn: async (values: { email: string; username: string; password: string; phone_number: string }) => {
      const response = await axios.post("/register", {
        email: values.email,
        name: values.username,
        password: values.password,
        phone_number: values.phone_number,
      });
      return response.data;
    },
    onSuccess: () => {
      message.success("Đăng ký thành công!");
      form.resetFields();
      navigate("/login"); 
    },
    onError: (error: any) => {
      message.error(error.response?.data?.errors || "Đăng ký thất bại, vui lòng thử lại.");
    },
  });

  const onFinish = (values: any) => {
    setLoading(true);
    mutate(values); 
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">
          Bạn chưa có tài khoản? Đăng ký ngay!
        </h2>
        <Form
          form={form}
          name="register"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email của bạn!",
              },
              {
                type: "email",
                message: "Vui lòng nhập địa chỉ email hợp lệ!",
              },
            ]}
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên đăng nhập của bạn!",
              },
              {
                min: 6,
                message: "Tên đăng nhập phải có ít nhất 6 ký tự!",
              },
            ]}
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
              {
                pattern: new RegExp(/^[0-9]{10,}$/),
                message: "Số điện thoại phải có ít nhất 10 chữ số!",
              },
            ]}
          >
            <Input className="w-full" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                min: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự!",
              },
            ]}
          >
            <Input.Password className="w-full" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Bạn phải đồng ý với điều khoản!")
                      ),
              },
            ]}
          >
            <Checkbox>
              Tôi đồng ý với <strong>Điều khoản & Điều kiện</strong>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Đăng ký ngay
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
