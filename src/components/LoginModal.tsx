import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { setVisible } from "@/store/action/modal";
import { signIn } from "next-auth/react";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const LoginModal: React.FC = () => {
  const [form] = Form.useForm();
  const { loginModal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  const handleOk = () => {
    form.validateFields().then(async (res) => {
      await signIn("credentials", {
        ...res,
        redirectTo: "/",
      });
    });
    // dispatch(setVisible({ type: "loginModal", value: false }));
  };

  const handleCancel = () => {
    dispatch(setVisible({ type: "loginModal", value: false }));
  };

  return (
    <>
      <Modal
        title='Basic Modal'
        open={loginModal.isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical' autoComplete='off'>
          <Form.Item<FieldType>
            label='Username'
            name='email'
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
