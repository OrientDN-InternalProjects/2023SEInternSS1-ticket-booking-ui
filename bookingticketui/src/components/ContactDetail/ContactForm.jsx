import React, { useState} from 'react'
import './ContactForm.css' 

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { FirstName, MiddleName, LastName, PhoneNumber, Email } = e.target.elements
      let conFom = {
        fname: FirstName?.value,
        mname: MiddleName?.value,
        lname: LastName?.value,
        phone: PhoneNumber?.value,
        mail: Email?.value,
      }

      console.log(conFom)
    }
    return (
      <div style={{ display: "flex", width: "1920px", justifyContent: 'center' }}>
      <div className="container">
        <h1 id = "contactheader">Contact details</h1>

        <form onSubmit={onSubmit}>

          {/* First Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="FirstName">
              First Name
            </label>
            <input className="form-control" type="text" value = {formStatus.FirstName} id="FirstName"  required />
          </div>


          {/* Middle Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="MiddleName">
              Middle Name
            </label>
            <input className="form-control" type="text" value = {formStatus.MiddleName} id="MiddleName" required />
          </div>

          {/* Last Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="LastName">
              Last Name
            </label>
            <input className="form-control" type="text" value = {formStatus.LastName} id="LastName" required />
          </div>


          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" pattern=".+@gmail\.com" value = {formStatus.Email} id="Email" required />
          </div>


          <div className="mb-3">
            <label className="form-label" htmlFor="Phone">
              Phone Number
            </label>
            <input className="form-control" type="tel" value = {formStatus.PhoneNumber} id="PhoneNumber" required />
          </div>


          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      </div>
    )
  }

export default ContactForm