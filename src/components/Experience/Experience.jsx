import React, { useState } from "react";
import "./Experiences.scss";
import { Form, Input, Typography, Checkbox } from "antd";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";

const { TextArea } = Input;
const { Text } = Typography;

export default function ExperienceForm({ onFinish, stillWorkingHere }) {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.submit(); // This will trigger the form submission
  };
  const [check, setCheck] = useState(stillWorkingHere);
  const onChangeCheckBox = () => {
    setCheck(!check);
  };
  return (
    <div className="experience-form">
      <h2>Add Your Experience</h2>
      <Form
        form={form}
        name="experienceForm"
        className="experience-form__form"
        onFinish={onFinish}
      >
        <Form.List name="work_experience">
          {(fields, { add, remove }) => (
            <div className="experience-form__form__fields">
              {fields.map((field, index) => (
                <>
                  <Typography style={{ textAlign: "left" }}>
                    Experience {index + 1}
                  </Typography>
                  <div key={field.key}>
                    <Typography style={{ textAlign: "left" }}>
                      Company
                    </Typography>
                    <Form.Item
                      className="form_item"
                      name={[field.name, "company"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter company name",
                        },
                      ]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                    <Typography style={{ textAlign: "left" }}>
                      Role Summary
                    </Typography>
                    <Form.Item
                      className="form_item"
                      name={[field.name, "role_summary"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter your role in the company",
                        },
                      ]}
                    >
                      <TextArea
                        autoSize={{ minRows: 2, maxRows: 3 }}
                        placeholder="Role"
                      />
                    </Form.Item>
                    <div className="experience-form__form__fields__dates">
                      <section>
                        <Typography style={{ textAlign: "left" }}>
                          Start Year*
                        </Typography>
                        <Form.Item
                          className="form_item"
                          name={[field.name, "startYear"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter start year",
                            },
                          ]}
                        >
                          <Input placeholder="Start Year" type="number" />
                        </Form.Item>
                      </section>
                      <section>
                        <Typography style={{ textAlign: "left" }}>
                          End Year*
                        </Typography>
                        <Form.Item
                          className="form_item"
                          name={[field.name, "endYear"]}
                        >
                          <Input placeholder="End Year" type="number" />
                        </Form.Item>
                      </section>
                      <Checkbox onChange={onChangeCheckBox}>
                        You are still wroking here
                      </Checkbox>
                    </div>
                    {fields.length > 1 && (
                      <ButtonPrimary
                        text="Remove Field"
                        onClick={() => remove(field.name)}
                      />
                    )}
                  </div>
                </>
              ))}
              <Text type="secondary">
                You can add multiple education fields by clicking on "Add
                Experience"
              </Text>
              <Form.Item>
                <ButtonSecondary
                  text="+ Add Experience"
                  onClick={() => add()}
                />
              </Form.Item>
            </div>
          )}
        </Form.List>
        <ButtonPrimary text="See Preview" onClick={handleSubmit} />
      </Form>
    </div>
  );
}
