import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/NavbarComponent";
import SelectTemplateComponent from "./Pages/SelectTemplate/SelectTemplate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPageComponent from "./Pages/FormPage/FormPage";
import HomeComponent from "./Pages/LandingPage/Home";
import About from "./Pages/AboutPage/About";

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  return (
    <Router>
      <div className="App_container">
        <Navbar />
        <div className="App_container__content">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
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
            <Route
              path="/steps"
              element={
                <FormPageComponent selectedTemplate={selectedTemplate} />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
