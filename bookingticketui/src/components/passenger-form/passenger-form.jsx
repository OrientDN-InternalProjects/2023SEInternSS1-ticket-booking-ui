import React, { useState, useContext, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AppContext } from "../../states/app-context";
const Passenger = () => {
  const { response } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  let [i, setI] = useState(0);
  const [inputFields, setInputFields] = useState([]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  useEffect(() => {
    setIndex(parseInt(response.numPeople));
  }, [parseInt(response.numPeople)]);

  useEffect(() => {
    let newfield = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nation: "",
      identifyCard: "",
      provideNa: "",
      expDate: "",
    };
    for (let i = 0; i <= index; i++) {
      setInputFields((prev) => [...prev, newfield]);
    }
  }, [index]);

  return (
    <Container className="w-50 p-3 mb-2 bg-light text-dark">
      {inputFields.map((input, index) => {
        return (
          // <Form
          //   key={index}
          //   style={{ marginTop: "10px", marginBottom: "10px" }}
          // >
          //   <h1>Passenger details</h1>
          //   <Row className="mb-3">
          //     <Form.Group as={Col} controlId="formGridEmail">
          //       <Form.Label>First Name</Form.Label>
          //       <Form.Control
          //         name="firstName"
          //         type="text"
          //         placeholder="First Name"
          //         value={input.firstName}
          //         onChange={(event) => handleFormChange(index, event)}
          //       />
          //     </Form.Group>

          //     <Form.Group as={Col} controlId="formGridPassword">
          //       <Form.Label>Last Name</Form.Label>
          //       <Form.Control
          //         name="lastName"
          //         type="text"
          //         placeholder="Last Name"
          //         value={input.lastName}
          //         onChange={(event) => handleFormChange(index, event)}
          //       />
          //     </Form.Group>
          //   </Row>

          //   <Form.Group className="mb-3" controlId="formGridAddress1">
          //     <Form.Label>Date of birth</Form.Label>
          //     <Form.Control
          //       name="dateOfBirth"
          //       placeholder="MM/dd/YYYY: 03/23/2023"
          //       value={input.dateOfBirth}
          //       onChange={(event) => handleFormChange(index, event)}
          //     />
          //   </Form.Group>

          //   <Form.Group className="mb-3" controlId="formGridAddress2">
          //     <Form.Label>Nation</Form.Label>
          //     <Form.Control
          //       name="nation"
          //       value={input.nation}
          //       onChange={(event) => handleFormChange(index, event)}
          //     />
          //   </Form.Group>

          //   <Row className="mb-3">
          //     <Form.Group as={Col} controlId="formGridCity">
          //       <Form.Label>IdentityCard</Form.Label>
          //       <Form.Control
          //         name="identifyCard"
          //         value={input.identifyCard}
          //         onChange={(event) => handleFormChange(index, event)}
          //       />
          //     </Form.Group>

          //     <Form.Group as={Col} controlId="formGridState">
          //       <Form.Label>ProvideNa</Form.Label>
          //       <Form.Control
          //         name="provideNa"
          //         value={input.provideNa}
          //         onChange={(event) => handleFormChange(index, event)}
          //       />
          //     </Form.Group>

          //     <Form.Group as={Col} controlId="formGridZip">
          //       <Form.Label>ExpDate</Form.Label>
          //       <Form.Control
          //         name="expDate"
          //         value={input.expDate}
          //         onChange={(event) => handleFormChange(index, event)}
          //       />
          //     </Form.Group>
          //   </Row>
          // </Form>
          <Row className="justify-content-center align-items-center m-5">
            <Card>
              <Card.Body className="px-4">
                <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                  Passenger {index + 1}
                </h3>

                <Row>
                  <Col md="6">
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={input.firstName}
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
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
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Date of birth</Form.Label>
                      <Form.Control
                        name="dateOfBirth"
                        placeholder="MM/dd/YYYY: 03/23/2023"
                        value={input.dateOfBirth}
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Nation</Form.Label>
                      <Form.Control
                        name="nation"
                        value={input.nation}
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
                        value={input.provideNa}
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md="6">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>IdentityCard</Form.Label>
                      <Form.Control
                        name="identifyCard"
                        value={input.identifyCard}
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
                      value={input.expDate}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </Form.Group>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        );
      })}
    </Container>
  );
};

export default Passenger;
