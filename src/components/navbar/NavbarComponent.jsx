import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">
        <section className="navbar__logo">
          <img
            src="https://www.codester.com/static/uploads/items/000/041/41164/icon.png"
            alt="Resume-logo"
          />
          <span>ResumeForge</span>
        </section>
      </Link>
      <section className="navbar__links">
        <Link to="/templates">
          {" "}
          <span>Choose Templates</span>{" "}
        </Link>
        <Link to="/">
          {" "}
          <span>My Resumes</span>{" "}
        </Link>
        <Link to="/about">
          {" "}
          <span>About Us</span>{" "}
        </Link>
      </section>
    </div>
  );
}
