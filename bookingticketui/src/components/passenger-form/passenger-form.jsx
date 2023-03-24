import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Passenger = () => {
  const [inputFields, setInputFields] = useState([
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nation: "",
      identifyCard: "",
      provideNa: "",
      expDate: "",
    },
  ]);

  const selectCountry = (val) => {
    this.setState({ country: val });
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nation: "",
      identifyCard: "",
      provideNa: "",
      expDate: "",
    };

    setInputFields([...inputFields, newfield]);
  };
  return (
    <Container className="w-50 p-3 mb-2 bg-light text-dark">
      <Form>
        <h1>Passenger details</h1>
        {inputFields.map((input, index) => {
          return (
            <Form key={index}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={input.firstName}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={input.lastName}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  name="dateOfBirth"
                  placeholder="MM/dd/YYYY: 03/23/2023"
                  value={input.dateOfBirth}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Nation</Form.Label>
                <CountryDropdown
                  name="nation"
                  value={input.nation}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>IdentityCard</Form.Label>
                  <Form.Control
                    name="identifyCard"
                    value={input.identifyCard}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>ProvideNa</Form.Label>
                  <Form.Control
                    name="provideNa"
                    value={input.provideNa}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>ExpDate</Form.Label>
                  <Form.Control
                    name="expDate"
                    value={input.expDate}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                </Form.Group>
              </Row>
              <Form>
                <Button variant="primary" onClick={addFields}>
                  add field
                </Button>
              </Form>
            </Form>
          );
        })}
      </Form>
    </Container>
  );
};

export default Passenger;
