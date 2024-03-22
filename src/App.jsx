import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/NavbarComponent";
import WellcomeComponent from "./Pages/LandingPage/WellcomeComponent";
import SelectTemplateComponent from "./Pages/SelectTemplate/SelectTemplate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemplatesOneComponent from "./components/TempateOne/TemplateOne";

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
                  // ResumeTemplates={ResumeTemplates}
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                />
              }
            />
            <Route path="/steps" element={<TemplatesOneComponent />} />
            <Route path="/about" element={<WellcomeComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
