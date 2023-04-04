import axios from "axios";
import React, { useState, useContext } from "react";
import { Container, Card, Row, Col, Form, FormGroup } from "react-bootstrap";
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
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  console.log(conFom);
  return (
    <Container className="w-75 p-3 mb-2 text-dark">
      <Form noValidate validated={validated} onBlur={handleSubmit}>
        {/* First Name form   */}
        <Card
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=1380&t=st=1680083843~exp=1680084443~hmac=dea1852b16d13f2c572206eaa0f1e6fd1e6f8d08103e9a3cfb3bd4a3f35dbdb4")`,
          }}
        >
          <Card.Body className="px-4">
            <h2 id="contactheader">Contact details</h2>

            <Row>
              <Col md="6">
                <Form.Group>
                  <label className="form-label" htmlFor="FirstName">
                    First Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    id="FirstName"
                    onChange={handleChange}
                    pattern="[a-z,A-Z,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹế, ' ']+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a firstName.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md="6">
                {/* Middle Name form   */}
                <FormGroup>
                  <label className="form-label" htmlFor="MiddleName">
                    Middle Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="middleName"
                    id="MiddleName"
                    onChange={handleChange}
                    pattern="[a-z,A-Z,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹế, ' ']+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a middleName.
                  </Form.Control.Feedback>
                </FormGroup>
              </Col>
            </Row>

            {/* Last Name form   */}
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-label" htmlFor="LastName">
                    Last Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="LastName"
                    onChange={handleChange}
                    pattern="[a-z,A-Z,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹế, ' ']+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a lastName.
                  </Form.Control.Feedback>
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
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
                  <Form.Control.Feedback type="invalid">
                    Please input a Email.
                  </Form.Control.Feedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label className="form-label" htmlFor="Phone">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    name="phoneNumber"
                    id="PhoneNumber"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    maxLength={10}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a Phone Number.
                  </Form.Control.Feedback>
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default ContactForm;
