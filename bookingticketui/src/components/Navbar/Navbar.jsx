import React from 'react'

import{SiConsul} from 'react-icons/si'
import{BsPhoneVibrate} from 'react-icons/bs'
import{AiOutlineGlobal} from 'react-icons/ai'
import '../../main.scss'

import pxfuel from '../../assets/pxfuel.jpg'
const Navbar = ({ children }) => {
  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul/>
        </div>
        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon'/> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon'/> Languge</li>
        </div>
        <div className='atb flex'>
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className='navBarTwo flex'>
        <div className="logoDiv">
          <img src={pxfuel} className='Logo' />
        </div>
        {children}
      </div>
      
    </div>
  )
}

export default Navbar
