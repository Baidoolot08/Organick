import React from "react";
import AboutUs2 from "../../../assets/images/aboutUs3.png";
import AboutUs1 from "../../../assets/images/aboutUs2.png";
import AboutUs from "../../../assets/images/aboutUs1.png";

import Img from "../../../assets/images/about.png";

import "./about.scss"; // туура

const About = () => {
  return (
    <div id="about">
      <div className="about__bg">
        <img src={Img} className="about__bg--img " alt="img" />
        <h1 className="about__bg--title">About</h1>
      </div>

      <div className="container">
        <div className="about">
          <div className="about__content">
            <div className="about__content--img">
              <img src={AboutUs} alt="" />
            </div>
            <div className="about__content--title">
              <h2>About Us</h2>
              <h1>
                We Believe in Working <br />
                Accredited Farmers
              </h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to <br />
                been the industry's standard dummy text ever since the 1500s,
                when an unknown <br /> printer took a galley.
              </p>
              <div className="about__content--title__card">
                <div className="about__content--title__card--img">
                  <img src={AboutUs1} alt="" />
                </div>
                <div className="about__content--title__card--text">
                  <h3>Organic Foods Only</h3>
                  <span>
                    Simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum
                  </span>
                </div>
              </div>
              <div className="about__content--title__card">
                <div className="about__content--title__card--img">
                  <img src={AboutUs2} alt="" />
                </div>
                <div className="about__content--title__card--text">
                  <h3>Quality Standards</h3>
                  <span>
                    Simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
