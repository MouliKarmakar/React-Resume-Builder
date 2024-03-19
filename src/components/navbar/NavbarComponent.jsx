import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <a to="\">
        <section className="navbar__logo">
          <img
            src="https://www.codester.com/static/uploads/items/000/041/41164/icon.png"
            alt="Resume-logo"
          />
          <span>ResumeForge</span>
        </section>
      </a>
      <section className="navbar__links">
        <a to="\">
          {" "}
          <span>Choose Templates</span>{" "}
        </a>
        <a to="\">
          {" "}
          <span>My Resumes</span>{" "}
        </a>
        <a to="\">
          {" "}
          <span>About Us</span>{" "}
        </a>
      </section>
    </div>
  );
}
