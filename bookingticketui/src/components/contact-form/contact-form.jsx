import axios from "axios";
import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
const err = "Error has occured";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../states/app-context";
const ContactForm = () => {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState("Send");
  const [conFom, setConFom] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { flight, setFlight } = useContext(AppContext);
  const handleChange = (event) => {
    setConFom({
      ...conFom,
      [event.target.name]: event.target.value,
    });
    setFlight({
      ...flight,
      ["contact"]: {
        ...conFom,
        [event.target.name]: event.target.value,
      },
    });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7089/api/Booking/request-contact", {
        firstName: conFom.firstName,
        middleName: conFom.middleName,
        lastName: conFom.lastName,
        email: conFom.email,
        phoneNumber: conFom.phoneNumber,
      });
      alert("Create contact sucessful");
    } catch (error) {
      console.log(error);
      alert("Create fail");
    }
  };

  return (
    <Container className="w-50 p-3 mb-2 bg-light text-dark">
      <h1 id="contactheader">Contact details</h1>

      <form>
        {/* First Name form   */}
        <div className="mb-3">
          <label className="form-label" htmlFor="FirstName">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="FirstName"
            onChange={handleChange}
            required
          />
        </div>

        {/* Middle Name form   */}
        <div className="mb-3">
          <label className="form-label" htmlFor="MiddleName">
            Middle Name
          </label>
          <input
            className="form-control"
            type="text"
            name="middleName"
            id="MiddleName"
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name form   */}
        <div className="mb-3">
          <label className="form-label" htmlFor="LastName">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="LastName"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            pattern=".+@gmail\.com"
            onChange={handleChange}
            id="Email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="Phone">
            Phone Number
          </label>
          <input
            className="form-control"
            type="tel"
            name="phoneNumber"
            id="PhoneNumber"
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
