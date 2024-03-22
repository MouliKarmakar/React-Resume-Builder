import React from "react";
import "./SelectTemplates.scss";
import { Link } from "react-router-dom";
import { ResumeTemplates } from "../../Constant/ResumeTemplates";
export default function SelectTemplateComponent({
  setSelectedTemplate,
  selectedTemplate,
}) {
  return (
    <div className="select_templates">
      {ResumeTemplates.map((template) => (
        <div
          key={template.id}
          className={`select_templates__template ${
            selectedTemplate === template.id ? "active" : ""
          }`}
          onClick={() => {
            setSelectedTemplate(template.id);
          }}
        >
          <img src={template.link} alt="resume-template" />
          {selectedTemplate === template.id && (
            <Link to="/steps">
              <button className="select_templates__template__button">
                Choose this Template
              </button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
