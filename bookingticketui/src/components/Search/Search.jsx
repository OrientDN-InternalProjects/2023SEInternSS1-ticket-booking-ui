import React from "react";
import { Container, Col, Form, Row, Button } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import { getAirports } from "../../services/search-services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import searchModel from "./searchModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Search = ({ response, setResponse }) => {
  const [dataSubmit, setDataSubmit] = useState({
    depart: "",
    arrival: "",
    dateDepart: "",
    numPeople: response.numPeople,
  });
  console.log(dataSubmit);

  const updateChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    setDataSubmit((existingValues) => ({
      ...existingValues,
      [fieldName]: e.target.value,
    }));
  };
  const { validationSchema, boxvalue, onSubmit } = searchModel({
    dataSubmit,
    response,
    setResponse,
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <Container className="w-50 p-3 mb-2 bg-light text-dark">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={4}>
            <Form.Label>Depart airport</Form.Label>
            <Form.Select
              size="sm"
              name="depart"
              {...register("depart")}
              onChange={updateChange}
            >
              <option>{response.depart}</option>
              {boxvalue.map((getcon) => (
                <option key={getcon.id} value={getcon.code}>
                  {" "}
                  {getcon.code},{getcon.name}
                </option>
              ))}
            </Form.Select>
            <div style={{ color: "red" }}>{errors.depart?.message}</div>
          </Col>
          <Col xs={4}>
            <Form.Label>Arival airport</Form.Label>
            <Form.Select
              size="sm"
              name="arrival"
              {...register("arrival")}
              onChange={updateChange}
            >
              <option>{response.arrival}</option>
              {boxvalue.map((getcon) => (
                <option key={getcon.id} value={getcon.code}>
                  {" "}
                  {getcon.code},{getcon.name}
                </option>
              ))}
            </Form.Select>
            <div style={{ color: "red" }}>{errors.arrival?.message}</div>
          </Col>
          <Col xs={3}>
            <Form.Group controlId="dob">
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                type="date"
                name="dateDepart"
                class="form-control"
                {...register("dateDepart")}
                onChange={updateChange}
                placeholder={response.dateDepart}
              />
            </Form.Group>
            <div style={{ color: "red" }}>{errors.dateDepart?.message}</div>
          </Col>
          <Col>
            <Form.Label></Form.Label>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Search;
