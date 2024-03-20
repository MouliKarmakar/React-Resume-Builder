import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/NavbarComponent";
import WellcomeComponent from "./components/Wellcome/WellcomeComponent";
import {} from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Router>
      {" "}
      {/* Move Router to wrap the entire App */}
      <div className="App_container">
        <Navbar />
        <div className="App_container__content">
          <Routes>
            <Route path="/" element={<WellcomeComponent />} />
            <Route path="/templates" element={<WellcomeComponent />} />
            <Route path="/steps" element={<WellcomeComponent />} />
            <Route path="/about" element={<WellcomeComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
