import React, { useState, useContext, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AppContext } from "../../states/app-context";
const Passenger = () => {
  const { response, setFlight, flight } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const [inputFields, setInputFields] = useState([
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nation: "",
      identityCard: "",
      provideNa: "",
      expDate: "",
    },
  ]);

  const handleFormChange = (index, event) => {
    event.preventDefault();
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    setFlight({
      ...flight,
      ["passes"]: [
        ...inputFields,
    ],
    });
  };

  useEffect(() => {
    setIndex(parseInt(response.numPeople));
    let newfield = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nation: "",
      identityCard: "",
      provideNa: "",
      expDate: "",
    };
    for (let i = 1; i < index; i++) {
      setInputFields((prev) => [...prev, newfield]);
      console.log(i);
    }
  }, [index]);
  console.log(inputFields);
  return (
    <Container className="w-75 p-3 mb-2 text-dark">
      <form>
        {inputFields.map((value, index) => {
          return (
            <Row
              key={index}
              className="justify-content-center align-items-center m-5"
            >
              <Card>
                <Card.Body className="px-4">
                  <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                    Passenger {index + 1}
                  </h3>

                  <Row>
                    <Col md="6">
                      <Form.Group controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="firstName"
                          type="text"
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Form.Group>
                    </Col>

                    <Col md="6">
                      <Form.Group controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastName"
                          type="text"
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                          name="dateOfBirth"
                          placeholder="MM/dd/YYYY: 03/23/2023"
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Nation</Form.Label>
                        <Form.Control
                          name="nation"
                          type="text"
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>ProvideNa</Form.Label>
                        <Form.Control
                          name="provideNa"
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Form.Group>
                    </Col>

                    <Col md="6">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>IdentityCard</Form.Label>
                        <Form.Control
                          name="identityCard"
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>ExpDate</Form.Label>
                      <Form.Control
                        name="expDate"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </Form.Group>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
      </form>
    </Container>
  );
};

export default Passenger;
