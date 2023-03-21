import axios from "axios";
import React, { useEffect, useState } from "react";
import { createAuthenticateAPIEndpoint, ENDPOINTS } from "/src/api/AuthenticateAPI";
import { validateEmail, validatePassword, validateConfirmPassword } from "/src/components/SignUp/SignUpValidation";
import { useFormik, withFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.css"


const SignUpForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [focused, setFocused] = useState(false);
  const [errorMessage, setErrMsg] = useState();
  const conForm = useFormik({
    initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Max is 15 characters")
        .required("Required!"),
      lastName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Max is 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .max(24, "Maximun 24 characters")
        .required("Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    })
  });
  const submitForm = async (event) => {
    event.preventDefault();
    console.log(conForm.values.confirmPassword);
    if (!validateEmail(conForm.values.email)  
        || !validatePassword(conForm.values.password)
        || !validateConfirmPassword(conForm.values.password, conForm.values.confirmPassword)) {
        alert("Register failed");
    }

    const response = await createAuthenticateAPIEndpoint(ENDPOINTS.signup).post({
      firstName: conForm.values.firstName,
      lastName: conForm.values.lastName,
      email: conForm.values.email,
      password: conForm.values.password,
      confirmPassword: conForm.values.confirmPassword,
      isAdmin: conForm.values.isAdmin,
    });

    if(response.data.result?.status == true)
    {
      // We intent to redirect to the login page
      // this block will be added after finish login page
    }

    else
    {
      alert(response.data.result?.message)
    }
    
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
              value = {conForm.values.firstName}
              onChange={conForm.handleChange}
              required
            />
            <span>{conForm.errors.firstName}</span>
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
              value = {conForm.values.lastName}
              onChange={conForm.handleChange}
              required
            />
            <span>{conForm.errors.lastName}</span>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value = {conForm.values.email}
              onChange={conForm.handleChange}
              required
            />
            <span>{conForm.errors.email}</span>
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
              value = {conForm.values.password}
              onChange={conForm.handleChange}
              required
            />
            <span>{conForm.errors.password}</span>
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
              value = {conForm.values.confirmPassword}
              onChange={conForm.handleChange}
              required
            />
            <span>{conForm.errors.confirmPassword}</span>
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