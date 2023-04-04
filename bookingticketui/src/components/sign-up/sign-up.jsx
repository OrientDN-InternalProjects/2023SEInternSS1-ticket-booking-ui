import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import {
  createAuthenticateAPIEndpoint,
  ENDPOINTS,
} from "/src/api/api-collector";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateName,
} from "/src/components/sign-up/sign-up-validation";
import { useFormik, withFormik } from "formik";
import * as Yup from "yup";
import { displayAlert } from "../notification/toast";
import "./sign-up.css";

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
      isAdmin: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Max is 15 characters")
        .matches(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          "Please enter valid name"
        )
        .required("Please enter your first name!"),
      lastName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Max is 15 characters")
        .matches(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          "Please enter valid name"
        )
        .required("Please enter your last name!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .max(24, "Maximun 24 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
          "Must Contain at least 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Password is required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Please re-enter password!"),
    }),
  });

  const submitForm = async (event) => {
    event.preventDefault();
    if (
      !validateEmail(conForm.values.email) ||
      !validatePassword(conForm.values.password) ||
      !validateConfirmPassword(
        conForm.values.password,
        conForm.values.confirmPassword
      ) ||
      !validateName(conForm.lastName) ||
      !validateName(conForm.firstName)
    ) {
      displayAlert("Register failed", "error");
    } else {
      const response = await createAuthenticateAPIEndpoint(
        ENDPOINTS.signup
      ).post({
        firstName: conForm.values.firstName,
        lastName: conForm.values.lastName,
        email: conForm.values.email,
        password: conForm.values.password,
        confirmPassword: conForm.values.confirmPassword,
        isAdmin: conForm.values.isAdmin,
      });
    }

    if (response.data.result?.status == true) {
    } else {
      displayAlert(response.data.result?.message, "error");
    }
  };

  return (
    // <div>
    //   <div className="signup-container">
    //     <h1 id="contactheader">SIGN UP FORM</h1>

    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <form onSubmit={submitForm}>
    //         {/* First Name form   */}
    //         <div className="mb-3">
    //           <label className="form-label" htmlFor="FirstName">
    //             First Name
    //           </label>
    //           <input
    //             className="form-control"
    //             type="text"
    //             name="firstName"
    //             id="firstName"
    //             value={conForm.values.firstName}
    //             onChange={conForm.handleChange}
    //             required
    //           />
    //           <span>{conForm.errors.firstName}</span>
    //         </div>

    //         {/* Last Name form   */}
    //         <div className="mb-3">
    //           <label className="form-label" htmlFor="LastName">
    //             Last Name
    //           </label>
    //           <input
    //             className="form-control"
    //             type="text"
    //             name="lastName"
    //             id="lastName"
    //             value={conForm.values.lastName}
    //             onChange={conForm.handleChange}
    //             required
    //           />
    //           <span>{conForm.errors.lastName}</span>
    //         </div>

    //         <div className="mb-3">
    //           <label className="form-label" htmlFor="email">
    //             Email
    //           </label>
    //           <input
    //             className="form-control"
    //             type="email"
    //             name="email"
    //             id="email"
    //             value={conForm.values.email}
    //             onChange={conForm.handleChange}
    //             required
    //           />
    //           <span>{conForm.errors.email}</span>
    //         </div>

    //         <div className="mb-3">
    //           <label className="form-label" htmlFor="password">
    //             Password
    //           </label>
    //           <div>
    //             <input
    //               style={{
    //                 borderRadius: "5px",
    //                 border: "none",
    //               }}
    //               className="form-input"
    //               type="password"
    //               name="password"
    //               id="password"
    //               value={conForm.values.password}
    //               onChange={conForm.handleChange}
    //               required
    //             />
    //           </div>
    //           <span>{conForm.errors.password}</span>
    //         </div>

    //         <div className="mb-3">
    //           <label className="form-label" htmlFor="confirmPassword">
    //             Confirm Password
    //           </label>
    //           <div>
    //             <input
    //               style={{
    //                 borderRadius: "5px",
    //                 border: "none",
    //               }}
    //               className="form-input"
    //               type="password"
    //               name="confirmPassword"
    //               id="confirmPassword"
    //               value={conForm.values.confirmPassword}
    //               onChange={conForm.handleChange}
    //               required
    //             />
    //           </div>
    //           <span>{conForm.errors.confirmPassword}</span>
    //         </div>

    //         <button className="btn btn-danger" type="submit">
    //           {formStatus}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={submitForm}>
                      <Form.Group className="mb-3" controlId="FirstName">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          className="form-control"
                          name="firstName"
                          id="firstName"
                          value={conForm.values.firstName}
                          onChange={conForm.handleChange}
                          required
                        />
                        <span>{conForm.errors.firstName}</span>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="LastName">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          className="form-control"
                          name="lastName"
                          id="lastName"
                          value={conForm.values.lastName}
                          onChange={conForm.handleChange}
                          required
                        />
                        <span>{conForm.errors.lastName}</span>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="form-control"
                          name="email"
                          id="email"
                          value={conForm.values.email}
                          onChange={conForm.handleChange}
                          required
                        />
                        <span>{conForm.errors.email}</span>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="form-input"
                          name="password"
                          id="password"
                          value={conForm.values.password}
                          onChange={conForm.handleChange}
                          required
                        />
                        <span>{conForm.errors.password}</span>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          className="form-input"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={conForm.values.confirmPassword}
                          onChange={conForm.handleChange}
                          required
                        />
                        <div>{conForm.errors.confirmPassword}</div>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpForm;
