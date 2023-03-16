import axios from "axios";
import React, { useState} from 'react'
import './ContactForm.css' 

const err = "Error has occured";

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const [ conFom, setConFom ] = useState({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    })

    const handleChange  = (event) => {
      setConFom({
        ...conFom,
        [event.target.name]: event.target.value
      })
    }

    const submitForm = async (event) => {
      event.preventDefault()
      try {
        await axios.post("https://localhost:7089/api/Booking/request-contact", {
          firstName: conFom.firstName,
          middleName: conFom.middleName,
          lastName: conFom.lastName,
          email: conFom.email,
          phoneNumber: conFom.phoneNumber
        })
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <div style={{ display: "flex", width: "1920px", justifyContent: 'center' }}>
      <div className="container">
        <h1 id = "contactheader">Contact details</h1>

        <form onSubmit={submitForm}>

          {/* First Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="FirstName">
              First Name
            </label>
            <input className="form-control" type="text" name="firstName" id="FirstName" onChange={handleChange} required />
          </div>


          {/* Middle Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="MiddleName">
              Middle Name
            </label>
            <input className="form-control" type="text" name="middleName" id="MiddleName" onChange={handleChange} required />
          </div>

          {/* Last Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="LastName">
              Last Name
            </label>
            <input className="form-control" type="text" name="lastName" id="LastName" onChange={handleChange} required />
          </div>


          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" name="email" pattern=".+@gmail\.com" onChange={handleChange} id="Email" required />
          </div>


          <div className="mb-3">
            <label className="form-label" htmlFor="Phone">
              Phone Number
            </label>
            <input className="form-control" type="tel" name="phoneNumber" id="PhoneNumber" onChange={handleChange} required />
          </div>


          <button className="btn btn-danger" 
                  type="submit"
                  >
            {formStatus}
          </button>
        </form>
      </div>
      </div>
    )
  }

export default ContactForm