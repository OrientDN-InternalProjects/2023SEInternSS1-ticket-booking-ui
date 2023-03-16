import React from 'react'

import{SiConsul} from 'react-icons/si'
import{BsPhoneVibrate} from 'react-icons/bs'
import '../../main.css'

import pxfuel from '../../assets/pxfuel.jpg'
const Navbar = ({ children }) => {
  return (
    <div>
    <div class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/">Home</a></li>
                <li><a href="/list-flight">List Flight</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
            <h1 class="logo"><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-flight-mode-notifications-justicon-lineal-color-justicon.png"/>Booking Flight</h1>
        </div>
    </div>
    <div className='navBarTwo flex'>
        <div className="logoDiv">
          <img src={pxfuel} className='Logo' />
          {children}
        </div> 
      </div>
      <div>
      <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the website</span> The website help you booking quickly.
    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
  <h1 class="logo" color='white'><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/null/external-flight-mode-notifications-justicon-lineal-color-justicon.png"/>Booking Flight</h1>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Company Name &copy; 2016</p>
  </div>
</footer>
      </div>
    </div>
  )
}

export default Navbar
