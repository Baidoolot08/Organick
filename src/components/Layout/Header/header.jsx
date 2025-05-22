import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/HeaderLogo.svg";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { ProductContext } from "../../../context/context";
import "./Header.scss";

const Header = () => {
  const { Basket } = useContext(ProductContext);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="HeaderLogo" />

          <div className="header--nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/admin">Admin</Link>
          </div>

          <div className="header--search">
            <div className="header--search__input">
              <input type="text" />
              <a href="# ">
                <IoSearch />
              </a>
            </div>
            <Link to="/basket" className="header--search__cart">
              <h3>Cart ({Basket.length})</h3>
              <div>
                <IoCartOutline />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
