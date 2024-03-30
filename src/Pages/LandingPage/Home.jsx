import React from "react";
import "./Home.scss";
import { ButtonSecondary } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function HomeComponent() {
  return (
    <div className="home_component">
      <div className="home_component__imgBox">
        <img
          src="	https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/home-animation.svg"
          alt="banner"
        />
        <img
          className="home_component__imgBox__resumeModel"
          src="https://www.myperfectresume.com/wp-content/uploads/2022/07/resume-template-original.svg"
          alt="resume_model"
        />
      </div>
      <div className="home_component__bannerBox">
        <h1 className="home_component__bannerBox__mainHeading">
          Start Building Your Resume Today!
        </h1>
        <span className="home_component__bannerBox__subHeading">
          Easily create the perfect resume for any job using our best-in-class
          resume builder platform.
        </span>
        <Link to="/templates">
          <ButtonSecondary text="Create your Resume Now" />
        </Link>
        <div className="home_component__bannerBox__descriptionBox">
          <h3>How it works?</h3>
          <span className="home_component__bannerBox__descriptionBox__description">
            Our online resume builder offers a quick and easy way to create your
            professional resume from over 30 design templates. Create a resume
            using our AI-powered online resume wizard, plus take advantage of
            expert suggestions and customizable modern and professional resume
            templates. Free users have access to our easy-to-use tool and TXT
            file downloads.
          </span>
        </div>
        <div className="home_component__bannerBox__connectUs">
          <a href="https://www.google.co.in/" target="_blank" rel="noreferrer">
            <GoogleIcon />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
