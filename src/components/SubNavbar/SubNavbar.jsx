import React from "react";
import "./SubNav.scss";
import { ButtonPrimary, ButtonSecondary } from "../Button/Button";
export default function SubNavComponent({
  handleBackClick,
  handleNextClick,
  current,
}) {
  return (
    <div className="sub_nav">
      <div className="sub_nav__buttons">
        {current >= 2 && (
          <ButtonSecondary text="Back" onClick={handleBackClick} />
        )}
        {current <= 5 && (
          <ButtonPrimary text="Next" onClick={handleNextClick} />
        )}
      </div>
    </div>
  );
}
