import React from "react";
import "./SubNav.scss";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";
export default function SubNavComponent({ handleBackClick, handleNextClick }) {
  return (
    <div className="sub_nav">
      <div className="sub_nav__buttons">
        <ButtonSecondary text="Back" onClick={handleBackClick} />
        <ButtonPrimary text="Next" onClick={handleNextClick} />
      </div>
    </div>
  );
}
