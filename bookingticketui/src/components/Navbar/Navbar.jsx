import React from 'react'

import{SiConsul} from 'react-icons/si'
import{BsPhoneVibrate} from 'react-icons/bs'
import{AiOutlineGlobal} from 'react-icons/ai'
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
            <h1 class="logo">Booking Flight</h1>
        </div>
    </div>
    <div>
    { children }
    </div>
   
    </div>
  )
}

export default Navbar
