import React from "react";
import { Container, Col, Form, Row, Button } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import { getAirports } from "../../services/search-services";
const Search = ({ response }) => {
  const [boxvalue, setBoxvalue] = useState([]);
  useEffect(() => {
    (async () => {
      getAirports().then((res) => setBoxvalue(res.data.result));
    })();
  }, []);
  return (
    <Container className="w-50 p-3 mb-2 bg-light text-dark">
      <Form>
        <Row>
          <Col xs={4}>
            <Form.Label>Depart airport</Form.Label>
            <Form.Select size="sm">
              <option>{response.depart}</option>
              {boxvalue.map((getcon) => (
                <option key={getcon.id} value={getcon.code}>
                  {" "}
                  {getcon.code},{getcon.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={4}>
            <Form.Label>Arival airport</Form.Label>
            <Form.Select size="sm">
              <option>{response.arrival}</option>
              {boxvalue.map((getcon) => (
                <option key={getcon.id} value={getcon.code}>
                  {" "}
                  {getcon.code},{getcon.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs={3}>
            <Form.Group controlId="dob">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={response.dateDepart}
                onfocus={response.dateDepart}
                placeholder={response.dateDepart}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label></Form.Label>
            <Button variant="primary">Search</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
