import React, { useState, useEffect, Fragment } from "react";
import "../../pages/flights-page/list-model.css";
import Table from "react-bootstrap/Table";
import {
  Container,
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  Card,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getSearch } from "../../services/search-services";
import Search from "../../components/search/Search";
const ListSearch = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let search = useParams();

  useEffect(() => {
    (async () => {
      let result = await getSearch(search.depart, search.apart, search.date);
      let res = await result.data;
      setData(res.result);
    })();
  }, [search.depart, search.arrival, search.dateDepart]);

  const handleBusinessClick = async (event, id) => {
    navigate(`/passenger-form/${id}`);
  };

  const handleEconomyClick = async (event, id) => {
    navigate(`/passenger-form/${id}`);
  };

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div>
      <Search />
      <Container>
        <h1 className="text-center text-light mt-10">Flight List</h1>
        <>
          {data.map((data) => (
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
                        <div>Remain Economy Seat: {data.remainEconomySeat}</div>
                      </Col>
                      <Col
                        md="8"
                        lg="3"
                        className="border-sm-start-none border-start"
                      >
                        <h6 className="text-success">
                          Business: {VND.format(data.businessPrice)}
                        </h6>
                        <h6 className="text-warning">
                          Economy: {VND.format(data.economyPrice)}
                        </h6>
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

export default ListSearch;
