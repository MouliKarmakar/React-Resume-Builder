import React from "react";
import { Form, Typography, Input, Button } from "antd";

export default function DetailsComponent() {
  const [form] = Form.useForm();
  return (
    <div className="details">
      <span className="details__text">Personal Details</span>
      <div className="details__form">
        <Form form={form}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
