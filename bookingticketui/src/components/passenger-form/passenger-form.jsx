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
      ["passes"]: [...inputFields],
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
    }
  }, [index]);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="w-75 p-3 mb-2 text-dark">
      <Form noValidate validated={validated} onBlur={handleSubmit}>
        {inputFields.map((value, index) => {
          return (
            <Row
              key={index}
              className="justify-content-center align-items-center m-5"
            >
              <Card
                style={{
                  backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=1380&t=st=1680083843~exp=1680084443~hmac=dea1852b16d13f2c572206eaa0f1e6fd1e6f8d08103e9a3cfb3bd4a3f35dbdb4")`,
                }}
              >
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
                          pattern="[a-z,A-Z,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹế, ' ']+"
                          onChange={(event) => handleFormChange(index, event)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please input a firstName.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md="6">
                      <Form.Group controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastName"
                          type="text"
                          pattern="[a-z,A-Z,ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹế, ' ']+"
                          onChange={(event) => handleFormChange(index, event)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please input a lastName.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Date of birth</Form.Label>
                        <input
                          type="date"
                          class="form-control"
                          name="dateOfBirth"
                          onChange={(event) => handleFormChange(index, event)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please input a date of birth.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Nation</Form.Label>
                        <Form.Control
                          name="nation"
                          type="text"
                          onChange={(event) => handleFormChange(index, event)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please input a nation.
                        </Form.Control.Feedback>
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
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please input a provide nation.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md="6">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>IdentityCard</Form.Label>
                        <Form.Control
                          name="identityCard"
                          onChange={(event) => handleFormChange(index, event)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please input a identityCard.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>ExpDate</Form.Label>
                      <input
                        type="month"
                        class="form-control"
                        name="expDate"
                        format="mm-yyyy"
                        onChange={(event) => handleFormChange(index, event)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please input a exp date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
      </Form>
    </Container>
  );
};

export default Passenger;
