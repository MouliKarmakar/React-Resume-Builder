import React from "react";
import "./Button.scss";
export function ButtonPrimary({ text, onClick }) {
  return (
    <button className="btn_primary" onClick={onClick}>
      {text}
    </button>
  );
}
export function ButtonSecondary({ onClick, text }) {
  return (
    <button className="btn_secondary" onClick={onClick}>
      {text}
    </button>
  );
}
