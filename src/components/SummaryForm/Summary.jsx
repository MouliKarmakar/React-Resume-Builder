import React from "react";
import "./Summary.scss";
import { ButtonPrimary } from "../Button/Button";
import { Form, Input, Typography } from "antd";
const { TextArea } = Input;
export default function SummaryForm({ onFinish }) {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.submit(); // This will trigger the form submission
  };
  return (
    <div className="Summary-form">
      <h2>Add your Resume summary here</h2>
      <Form form={form} onFinish={onFinish} className="summary-form__summary">
        <Typography style={{ textAlign: "left" }}>Summary*</Typography>
        <Form.Item name="reume_summary">
          <TextArea
            autoSize={{ minRows: 3, maxRows: 5 }}
            placeholder="Resume Summary"
          />
        </Form.Item>
        <ButtonPrimary text="See Preview" onClick={handleSubmit} />
      </Form>
    </div>
  );
}
