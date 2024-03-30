import React, { useState } from "react";
import "./Navbar.scss";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
// import BackspaceIcon from "@mui/icons-material/Backspace";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const menuItems = [
    {
      id: "1",
      label: <Link to="/templates">Choose Templates</Link>,
    },
    {
      id: "2",
      label: <Link to="/about">About Us</Link>,
    },
  ];
  return (
    <>
      <div className="navbar">
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
      </div>
    </>
  );
}
