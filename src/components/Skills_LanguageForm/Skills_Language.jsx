import React from "react";
import "./Skills_Language.scss";
import { Form, Input, Select } from "antd";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";

const { Option } = Select;

export default function SkillsLanguage({ onFinish }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.submit(); // This will trigger the form submission
  };

  return (
    <div className="skills_language">
      <h1>Language skills</h1>
      <Form
        form={form}
        name="other_Form"
        className="others__form"
        onFinish={onFinish}
      >
        {/* Skills */}
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }) => (
                <Form.Item key={key} name={[name, "skill"]}>
                  <Input placeholder="Skill" style={{ width: "60%" }} />
                  <ButtonPrimary text="Remove" onClick={() => remove(name)} />
                </Form.Item>
              ))}
              <Form.Item>
                <ButtonSecondary text="Add Skill" onClick={() => add()} />
              </Form.Item>
            </>
          )}
        </Form.List>

        {/* Languages */}
        <Form.List name="languages">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Form.Item key={field.key} name={[field.name, "language"]}>
                  <Input placeholder="Language" style={{ width: "60%" }} />
                  <Form.Item key={field.key} name={[field.name, "level"]}>
                    <Select placeholder="Select level" style={{ width: "60%" }}>
                      <Option value="Proficient">Proficient</Option>
                      <Option value="Fluent">Fluent</Option>
                      <Option value="Good">Good</Option>
                      <Option value="Average">Average</Option>
                      <Option value="Poor">Poor</Option>
                      <Option value="Basic">Basic</Option>
                    </Select>
                  </Form.Item>
                  <ButtonPrimary
                    text="Remove"
                    onClick={() => remove(field.name)}
                  />
                </Form.Item>
              ))}
              <Form.Item>
                <ButtonSecondary text="Add Language" onClick={() => add()} />
              </Form.Item>
            </>
          )}
        </Form.List>

        <ButtonPrimary text="See Preview" onClick={handleSubmit} />
      </Form>
    </div>
  );
}
