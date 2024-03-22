import React from "react";
import "./Wellcome.scss";
import { Button } from "@mui/material";
export default function WellcomeComponent() {
  return (
    <div className="wellcome-component">
      <section className="wellcome-component__firstSection">
        <img
          src="https://www.codester.com/static/uploads/items/000/041/41164/icon.png"
          alt="Resume-logo"
        />
        <span className="wellcome-component__firstSection__text">
          WellCome to the ResumeForge
        </span>
      </section>
      <section className="wellcome-component__secondSection">
        <span className="wellcome-component__secondSection__text">
          Build your resume for job-application without any cost.
        </span>
        <div className="wellcome-component__secondSection__buttonDiv">
          <button>Get Started</button>
        </div>
      </section>
    </div>
  );
}
