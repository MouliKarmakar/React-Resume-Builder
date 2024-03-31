import React, { useState } from "react";
import "./FormPage.scss";
import SubNavComponent from "../../components/SubNavbar/SubNavbar";
import { Initialdata } from "../../Constant/InitialData";
import HeadingFormComponent from "../../components/HeadingForm/HeadingForm";
import TemplatesOneComponent from "../../components/TempateOne/TemplateOne";
import EducationForm from "../../components/Education/Education";
import SummaryForm from "../../components/SummaryForm/Summary";
import ExperienceForm from "../../components/Experience/Experience";
import ProjectFormComponent from "../../components/Projects/ProjectForm";
import TemplatesTwoComponent from "../../components/TemplateTwo/TemplateTwo";
// import SkillsLanguage from "../../components/Skills_LanguageForm/Skills_Language";

export default function FormPageComponent({ selectedTemplate }) {
  const [formData, setFormData] = useState(Initialdata);
  const [current, setCurrent] = useState(1);

  const check = Initialdata.work_experience.still_working_here;

  const handleNextClick = () => {
    setCurrent((curr) => curr + 1);
  };
  const handleBackClick = () => {
    setCurrent((curr) => curr - 1);
  };

  const handleFormSubmit = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
  };

  return (
    <div className="form_page">
      <SubNavComponent
        handleBackClick={handleBackClick}
        handleNextClick={handleNextClick}
        current={current}
      />
      <div className="form_page__forms">
        {current === 1 && <HeadingFormComponent onFinish={handleFormSubmit} />}
        {current === 2 && <EducationForm onFinish={handleFormSubmit} />}
        {current === 3 && <SummaryForm onFinish={handleFormSubmit} />}
        {current === 4 && (
          <ExperienceForm
            onFinish={handleFormSubmit}
            stillWorkingHere={check}
          />
        )}
        {current === 5 && <ProjectFormComponent onFinish={handleFormSubmit} />}

        {selectedTemplate === 1 ? (
          <TemplatesOneComponent formData={formData} current={current} />
        ) : (
          <TemplatesTwoComponent formData={formData} current={current} />
        )}
      </div>
    </div>
  );
}
