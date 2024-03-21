import React from "react";
import "./BuildingSteps.scss";
import { Steps } from "antd";
const items = [
  {
    id: 1,
    title: "Details",
  },
  {
    id: 2,
    title: "Education",
  },
  {
    id: 3,
    title: "Expirience",
  },
  {
    id: 4,
    title: "Skills",
  },
  {
    id: 5,
    title: "Achivements",
  },
  {
    id: 6,
    title: "Languages",
  },
  {
    id: 7,
    title: "summary",
  },
  {
    id: 8,
    title: "Passions",
  },
];
export default function ResumeBuilding() {
  return (
    <div className="resume_building">
      <div className="resume_building__stepper">
        <Steps
          direction={"vertical"}
          labelPlacement="vertical"
          items={items}
          current={1}
          lineWidth={17}
          status="In Process"
        />
      </div>
      <div className="resume_building__input"></div>
    </div>
  );
}
