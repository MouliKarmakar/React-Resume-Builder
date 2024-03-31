import React from "react";
import "./ProjectForm.scss";
import { Form, Input, Typography } from "antd";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";

const { TextArea } = Input;
const { Text } = Typography;

export default function ProjectFormComponent({ onFinish }) {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.submit(); // This will trigger the form submission
  };
  return (
    <div className="project-form">
      <h2>Add Your Projects</h2>
      <span>
        This field is not necessary for all the templates available here if this
        field is not present in the template please skip this filed
      </span>
      <Form
        form={form}
        name="projectsForm"
        className="project-form__form"
        onFinish={onFinish}
      >
        <Form.List name="projects">
          {(fields, { add, remove }) => (
            <div className="project-form__form__fields">
              {fields.map((field, index) => (
                <>
                  <Typography style={{ textAlign: "left" }}>
                    project {index + 1}
                  </Typography>
                  <div key={field.key}>
                    <Typography style={{ textAlign: "left" }}>
                      project_name
                    </Typography>
                    <Form.Item
                      className="form_item"
                      name={[field.name, "project_name"]}
                    >
                      <Input placeholder="description" />
                    </Form.Item>
                    <Typography style={{ textAlign: "left" }}>
                      Description
                    </Typography>
                    <Form.Item
                      className="form_item"
                      name={[field.name, "description"]}
                    >
                      <TextArea
                        autoSize={{ minRows: 2, maxRows: 3 }}
                        placeholder="Description"
                      />
                    </Form.Item>
                    <div className="experience-form__form__fields__dates">
                      <section>
                        <Typography style={{ textAlign: "left" }}>
                          live_demo
                        </Typography>
                        <Form.Item
                          className="form_item"
                          name={[field.name, "live_demo"]}
                        >
                          <Input placeholder="live_demo" />
                        </Form.Item>
                      </section>
                      <section>
                        <Typography style={{ textAlign: "left" }}>
                          source_code
                        </Typography>
                        <Form.Item
                          className="form_item"
                          name={[field.name, "source_code"]}
                        >
                          <Input placeholder="source_code" />
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
                You can add multiple project fields by clicking on "Add Project"
              </Text>
              <Form.Item>
                <ButtonSecondary text="+ Add Project" onClick={() => add()} />
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
}
