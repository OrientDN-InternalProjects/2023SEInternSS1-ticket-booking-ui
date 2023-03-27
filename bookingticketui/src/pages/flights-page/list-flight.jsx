import React, { useState, useEffect, Fragment } from "react";
import "../../pages/flights-page/list-model.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { getListFlights } from "../../services/search-services";
import {
  Container,
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  Card,
} from "react-bootstrap";
const ListFlight = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      getListFlights().then((res) => setData(res.data.result));
    })();
  }, []);
  const handleBusinessClick = async (event) => {
    navigate("/passenger-form");
  };
  const handleEconomyClick = async (event) => {
    navigate("/passenger-form");
  };

  console.log("result", data);
  return (
    <div>
      <Container>
        <h1 className="text-center text-light mt-10">Flight List</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search flight"
            />
          </InputGroup>
        </Form>
        <>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.departAirport.toLowerCase().includes(search);
            })
            .map((data) => (
              // <tr key={data.id}>
              //   <td>
              //     <img src="https://img.icons8.com/nolan/64/airplane-take-off.png" />
              //   </td>
              //   <td>{data.aircraftModel}</td>
              //   <td>{data.departAirport}</td>
              //   <td>{data.arrivalAirport}</td>
              //   <td>{data.departTime}</td>
              //   <td>{data.arrivalTime}</td>
              //   <td>{data.businessPrice}</td>
              //   <td>{data.economyPrice}</td>
              //   <td>{data.remainBusinessSeat}</td>
              //   <td>{data.remainEconomySeat}</td>
              //   <td>
              //     {" "}
              //     <Button onClick={handleBusinessClick} variant="success">
              //       Booking Business
              //     </Button>{" "}
              //   </td>
              //   <td>
              //     {" "}
              //     <Button variant="warning" onClick={handleEconomyClick}>
              //       Booking Economy
              //     </Button>{" "}
              //   </td>
              // </tr>
              <Row
                key={data.id}
                bg={"Light"}
                className="justify-content-center mb-0"
              >
                <Col md="12" xl="8">
                  <Card className="shadow-0 border rounded-3 mt-5 mb-3">
                    <Card.Body>
                      <Row>
                        <Col md="12" lg="3" className="mb-4 mb-lg-0">
                          <Card.Img
                            src="https://static.wixstatic.com/media/9d8ed5_d3acee0b07b942d39681171e31a4ba4d~mv2.png/v1/fill/w_500,h_333,al_c,q_90,usm_0.66_1.00_0.01/9d8ed5_d3acee0b07b942d39681171e31a4ba4d~mv2.webp"
                            fluid
                            className="w-100"
                          />
                        </Col>
                        <Col md="6" className="text-center">
                          <h5>VietName AirLine: {data.aircraftModel}</h5>
                          <div className="mb-0 ">
                            <span>{data.departAirport}</span>
                            <span className="text-primary"> •-------</span>
                            <span className="text-primary">• </span>
                            <span>
                              {data.arrivalAirport}
                              <br />
                            </span>
                          </div>
                          <div className="mb-2">
                            <span>{data.departTime}</span>
                            <span className="text-primary"> •-------- </span>
                            <span
                              className="text-primary text-wrap"
                              style={{ width: "6rem" }}
                            >
                              •
                            </span>
                            <span>
                              {data.arrivalTime}
                              <br />
                            </span>
                          </div>

                          <div>
                            Remain Business Seat: {data.remainBusinessSeat}
                          </div>
                          <div>
                            Remain Economy Seat: {data.remainEconomySeat}
                          </div>
                        </Col>
                        <Col
                          md="8"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >
                          <h5 className="text-success">
                            Business : {data.businessPrice}
                          </h5>
                          <h5 className="text-warning">
                            Economy : {data.economyPrice}
                          </h5>

                          <div className="d-flex flex-column mt-4">
                            <Button
                              color="primary"
                              size="sm"
                              onClick={handleBusinessClick}
                            >
                              Booking Business
                            </Button>
                            <Button
                              outline
                              color="primary"
                              size="sm"
                              className="mt-2"
                              onClick={handleEconomyClick}
                            >
                              Booking Economy
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
        </>
      </Container>
    </div>
  );
};

export default ListFlight;
