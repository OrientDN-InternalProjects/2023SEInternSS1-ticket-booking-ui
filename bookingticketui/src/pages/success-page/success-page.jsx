import React from "react";
import { Container, Card, Col, Form, Row, Button } from "react-bootstrap";
const SuccessPage = () => {
  return (
    <Container className="w-75 p-3 mb-2 text-dark">
          <Row className="justify-content-center align-items-center m-5">
            <Card style={{ width: "20rem" }}>
              <Card.Body className="text-center" style={{ alignItems:"center"}}>
              <Card.Img style={{ width: 100, height: 100 }} variant="top" src="https://cdn-icons-png.flaticon.com/512/190/190411.png" />
                <Card.Title>Payment Success</Card.Title>
                <Card.Text>
                  Thank you for using our service
                  Please check your tickets in email
                </Card.Text>
                <a class="btn btn-primary" href="/" role="button">Return HomePage</a>
              </Card.Body>
            </Card>
          </Row>
    </Container>
  );
};

export default SuccessPage;
