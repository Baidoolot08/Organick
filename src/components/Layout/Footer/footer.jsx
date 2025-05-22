import React from "react";
import logo from "../../../assets/images/HeaderLogo.svg";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--blockLeft">
            <h1>Contact Us</h1>
            <h3>Email</h3>
            <h4>needhelp@Organia.com</h4>
            <h3>Phone</h3>
            <h4>666 888 888</h4>
            <h3>Address</h3>
            <h4>88 road, borklyn street, USA</h4>
          </div>
          <div className="footer--Line"></div>
          <div className="footer--blockCenter">
            <img src={logo} alt="FooterLogo" />
            <h4>
              Simply dummy text of the printing and typesetting industry. <br />{" "}
              Lorem Ipsum simply dummy text of the printing{" "}
            </h4>
            <div className="footer--blockCenter__icons">
              <div className="footer--blockCenter__icons--circle">
                <Link to="https://www.instagram.com/organic/">
                  <BsInstagram />
                </Link>
              </div>
              <div className="footer--blockCenter__icons--circle">
                <FaFacebook />
              </div>
              <div className="footer--blockCenter__icons--circle">
                <FaTwitter />
              </div>
              <div className="footer--blockCenter__icons--circle">
                <BsPinterest />
              </div>
            </div>
          </div>
          <div className="footer--Line"></div>
          <div className="footer--blockRight">
            <h1>Utility Pages</h1>
            <h4>Style Guide</h4>
            <h4>404 Not Found</h4>
            <h4>Password Protected</h4>
            <h4>Licences</h4>
            <h4>Changelog</h4>
          </div>
        </div>
        <div className="footer--Downe"></div>
        <div className="footer--Down">
          <h3>Copyright © Organick</h3>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
