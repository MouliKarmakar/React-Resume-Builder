import React, { useState } from "react";
import "./Navbar.scss";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={`navbar ${isActive ? "active" : ""}`}>
        <Link to="/">
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
          <Link to="/about">
            {" "}
            <span>About Us</span>{" "}
          </Link>
        </section>
        <div className="navbar__toggle" onClick={handleToggle}>
          {!isActive ? <HorizontalSplitIcon /> : <BackspaceIcon />}
        </div>
      </div>
    </>
  );
}
