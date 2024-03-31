import React from "react";
import "./HeadingForm.scss";
import { Form, Input, Typography } from "antd";
import { ButtonPrimary } from "../Button/Button";

export default function HeadingFormComponent({ onFinish }) {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.submit(); // This will trigger the form submission
  };
  return (
    <div className="heading_form">
      <h2>Add Your Personal Details</h2>
      <Form form={form} onFinish={onFinish} className="heading_form__form">
        <Typography style={{ textAlign: "left" }}>Full Name</Typography>
        <Form.Item
          name={["heading", "full_name"]}
          rules={[
            {
              required: true,
              message: "Please enter school or college",
            },
          ]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>
        <section>
          <Typography style={{ textAlign: "left" }}>Job_Position</Typography>
          <Form.Item
            name={["heading", "job_position"]}
            className="form_item"
            rules={[
              {
                required: true,
                message: "Please enter school or college",
              },
            ]}
          >
            <Input placeholder="enter the job position you are applying for " />
          </Form.Item>
        </section>
        <div className="heading_form__form__location">
          <section>
            <Typography style={{ textAlign: "left" }}>City</Typography>
            <Form.Item
              name={["heading", "city"]}
              className="form_item"
              rules={[
                {
                  required: true,
                  message: "Please enter school or college",
                },
              ]}
            >
              <Input placeholder="Type your City" />
            </Form.Item>
          </section>
          <section>
            <Typography style={{ textAlign: "left" }}>Country</Typography>
            <Form.Item
              name={["heading", "country"]}
              className="form_item"
              rules={[
                {
                  required: true,
                  message: "Please enter school or college",
                },
              ]}
            >
              <Input placeholder="Type your Country" />
            </Form.Item>
          </section>
          <section>
            <Typography style={{ textAlign: "left" }}>Pin_code</Typography>
            <Form.Item
              name={["heading", "pin_code"]}
              className="form_item"
              rules={[
                {
                  required: true,
                  message: "Please enter school or college",
                },
              ]}
            >
              <Input placeholder="Type your Pin_code" />
            </Form.Item>
          </section>
        </div>
        <div className="heading_form__form__contact">
          <section>
            <Typography style={{ textAlign: "left" }}>Contact No.</Typography>
            <Form.Item
              name={["heading", "phone"]}
              className="form_item"
              rules={[
                {
                  required: true,
                  message: "Please enter school or college",
                },
              ]}
            >
              <Input placeholder="+xx-xxxx-xxxx-xx" />
            </Form.Item>
          </section>
          <section>
            <Typography style={{ textAlign: "left" }}>Email</Typography>
            <Form.Item
              name={["heading", "email"]}
              className="form_item"
              rules={[
                {
                  required: true,
                  message: "Please enter school or college",
                },
              ]}
            >
              <Input placeholder="enter your email" type="email" />
            </Form.Item>
          </section>
        </div>
        <ButtonPrimary text="See preview" onClick={handleSubmit} />
      </Form>
      <span>
        You must click to see Preview to add your ditails within the resume
      </span>
    </div>
  );
}
