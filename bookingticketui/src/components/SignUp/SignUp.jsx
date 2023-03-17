import axios from "axios";
import React, { useState } from "react";
import { createAuthenticateAPIEndpoint, ENDPOINTS } from "/src/api/AuthenticateAPI";
import { validateEmail, validatePassword, validateConfirmPassword } from "/src/components/SignUp/SignUpValidation";

const SignUpForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [conForm, setconForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const handleChange = (event) => {
    setconForm({
      ...conForm,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    console.log(conForm.confirmPassword);
    if (!validateEmail(conForm.email)  
        || !validatePassword(conForm.password)
        || !validateConfirmPassword(conForm.password, conForm.confirmPassword)) {
        alert("Register failed");
    }
 
    const response = await createAuthenticateAPIEndpoint(ENDPOINTS.signup).post({
      firstName: conForm.firstName,
      lastName: conForm.lastName,
      email: conForm.email,
      password: conForm.password,
      confirmPassword: conForm.confirmPassword,
      isAdmin: conForm.isAdmin,
    });

    if(response.data.result?.status == true)
    {
      <nav></nav>
    }
    alert(response.data.result?.message)
  };

  return (
    <div style={{ display: "flex", width: "flex", justifyContent: "center" }}>
      <div className="container">
        <h1 id="contactheader">SIGN UP FORM</h1>

        <form onSubmit={submitForm}>
          {/* First Name form   */}
          <div className="mb-3">
            <label className="form-label" htmlFor="FirstName">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
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
              id="lastName"
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
              onChange={handleChange}
              id="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;