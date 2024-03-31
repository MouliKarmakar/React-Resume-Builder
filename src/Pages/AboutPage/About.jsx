import React from "react";
import "./About.scss";
export default function About() {
  return (
    <div className="about">
      <img
        src="https://resumegenius.com/wp-content/uploads/hero-home-page-banner.png"
        alt="about_img"
      />
      <div className="about__content">
        <section className="about__content__contentOne">
          <h2>About Us - ResumeForge</h2>
          <span>
            Welcome to ResumeForge, where we believe that every individual has a
            unique story to tell, and a well-crafted resume is the key to
            unlocking countless opportunities. At ResumeForge, we're dedicated
            to empowering individuals like you to build professional resumes
            that showcase your skills, experiences, and aspirations with
            confidence.
          </span>
        </section>
        <section className="about__content__contentTwo">
          <h3>Our Mission</h3>
          <span>
            Our mission at ResumeForge is simple yet profound: to revolutionize
            the way people create resumes. We strive to provide a user-friendly
            platform that offers intuitive tools, expert guidance, and
            customizable templates, allowing you to craft resumes that stand out
            in today's competitive job market.
          </span>
        </section>
        <section className="about__content__contentThree">
          <h3>Join the ResumeForge Community</h3>
          <span>
            Join thousands of satisfied users who have unlocked new
            opportunities with resumes created on ResumeForge. Whether you're
            seeking your dream job, applying to college, or pursuing freelance
            opportunities, let ResumeForge be your trusted ally on your journey
            to success.
          </span>
        </section>
        <span>
          Start building your professional future today with ResumeForge - Where
          Your Career Begins!
        </span>
      </div>
    </div>
  );
}
