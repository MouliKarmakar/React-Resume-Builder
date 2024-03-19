import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/NavbarComponent";
import WellcomeComponent from "./components/Wellcome/WellcomeComponent";
export default function App() {
  return (
    <div className="App_container">
      <Navbar />
      <WellcomeComponent />
    </div>
  );
}
