import React from "react";

import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import "../../main.css";

import pxfuel from "../../assets/flightImage.jpg";
const Navbar = () => {
  return (
    <div style={{ backgroundImage: `url(${pxfuel})` }}>
      <div class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/list-flight">List Flight</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <h1 class="logo">
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-flight-mode-notifications-justicon-lineal-color-justicon.png" />
            Booking Flight
          </h1>
        </div>
      </div>
      <div className="navBarTwo flex"></div>
    </div>
  );
};

export default Navbar;
