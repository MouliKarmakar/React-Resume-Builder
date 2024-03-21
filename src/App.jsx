import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/NavbarComponent";
import WellcomeComponent from "./Pages/Wellcome/WellcomeComponent";
import SelectTemplateComponent from "./Pages/SelectTemplate/SelectTemplate";
import ResumeBuilding from "./Pages/Steps/BuildingSteps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const ResumeTemplates = [
  {
    id: 1,
    link: "https://beamjobs.wpenginepowered.com/wp-content/uploads/2023/01/academic-resume-template.png",
  },
  {
    id: 2,
    link: "https://cdn.enhancv.com/polished_resume_template_1_6697880370.png",
  },
];
export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  return (
    <Router>
      <div className="App_container">
        <Navbar />
        <div className="App_container__content">
          <Routes>
            <Route path="/" element={<WellcomeComponent />} />
            <Route
              path="/templates"
              element={
                <SelectTemplateComponent
                  ResumeTemplates={ResumeTemplates}
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                />
              }
            />
            <Route path="/steps" element={<ResumeBuilding />} />
            <Route path="/about" element={<WellcomeComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
