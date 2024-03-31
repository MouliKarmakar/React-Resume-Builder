import React from "react";
import "./Education.scss";
import { Form, Input, Typography } from "antd";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";

const { Text } = Typography;

const EducationForm = ({ onFinish }) => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.submit(); // This will trigger the form submission
  };
  return (
    <div className="education-form">
      <h2>Add Your Education</h2>
      <Form
        form={form}
        name="educationForm"
        className="education-form__form"
        onFinish={onFinish}
      >
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <div className="education-form__form__fields">
              {fields.map((field, index) => (
                <>
                  <Typography style={{ textAlign: "left" }}>
                    Education {index + 1}
                  </Typography>
                  <div key={field.key}>
                    <Typography style={{ textAlign: "left" }}>
                      School_College
                    </Typography>
                    <Form.Item
                      className="form_item"
                      name={[field.name, "school_college"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter school or college",
                        },
                      ]}
                    >
                      <Input placeholder="School/College" />
                    </Form.Item>
                    <Typography style={{ textAlign: "left" }}>
                      Degree
                    </Typography>
                    <Form.Item
                      className="form_item"
                      name={[field.name, "degree"]}
                      rules={[
                        { required: true, message: "Please enter degree" },
                      ]}
                    >
                      <Input placeholder="Degree" />
                    </Form.Item>
                    <div className="education-form__form__fields__dates">
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
                          rules={[
                            {
                              required: true,
                              message: "Please enter end year",
                            },
                          ]}
                        >
                          <Input placeholder="End Year" type="number" />
                        </Form.Item>
                      </section>
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
                Education"
              </Text>
              <Form.Item>
                <ButtonSecondary text="+ Add Education" onClick={() => add()} />
              </Form.Item>
            </div>
          )}
        </Form.List>
        <ButtonPrimary text="See Preview" onClick={handleSubmit} />
      </Form>
      <span>
        You must click to see Preview to add your ditails within the resume
      </span>
    </div>
  );
};

export default EducationForm;
