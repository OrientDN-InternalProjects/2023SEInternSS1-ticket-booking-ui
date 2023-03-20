import React from "react";
import "../../main.css";
const Support = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <p class="about">
            <span> About the website</span> The website help you booking
            quickly.
          </p>
          <div class="icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>

            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span> Street name and number</span> City, Country
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="#"> office@company.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right col-md-4 col-sm-6">
          <h1 class="logo" color="white">
            <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-flight-mode-notifications-justicon-lineal-color-justicon.png" />
            Booking Flight
          </h1>
          <p class="menu">
            <a href="#"> Home</a> |<a href="#"> About</a> |
            <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
            <a href="#"> News</a> |<a href="#"> Contact</a>
          </p>
          <p class="name"> Company Name &copy; 2016</p>
        </div>
      </footer>
    </div>
  );
};

export default Support;
