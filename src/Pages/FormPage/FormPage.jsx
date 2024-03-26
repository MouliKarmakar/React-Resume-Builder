import React, { useState } from "react";
import "./FormPage.scss";
import SubNavComponent from "../../components/SubNavbar/SubNavbar";
import { Initialdata } from "../../Constant/InitialData";
import HeadingFormComponent from "../../components/Heading_summary/HeadingForm";
import TemplatesOneComponent from "../../components/TempateOne/TemplateOne";
import EducationForm from "../../components/Education/Education";

export default function FormPageComponent() {
  const [formData, setFormData] = useState(Initialdata);
  const [current, setCurrent] = useState(1);
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
      />
      <div className="form_page__forms">
        {current === 1 && <HeadingFormComponent onFinish={handleFormSubmit} />}
        {current === 2 && <EducationForm onFinish={handleFormSubmit} />}

        <TemplatesOneComponent formData={formData} />
      </div>
    </div>
  );
}
