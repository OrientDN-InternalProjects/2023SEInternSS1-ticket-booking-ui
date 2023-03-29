import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AppContext } from "../../states/app-context";
import { getFlightById } from "../../services/booking-service";
import { useNavigate, useParams } from "react-router-dom";
const FlightInfo = () => {
  const [boxvalue, setBoxvalue] = useState([]);
  let search = useParams();
  useEffect(() => {
    (async () => {
      getFlightById(search.id).then((res) => setBoxvalue(res));
    })();
  }, [search.id]);
  const getPrice = () => {
    if (search.seattype === "business") {
      return boxvalue.businessPrice;
    }
    return boxvalue.economyPrice;
  };
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Container fluid className="my-5">
      <Row className="justify-content-center">
        <Col md="20">
          <Card
            style={{
              backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=1380&t=st=1680083843~exp=1680084443~hmac=dea1852b16d13f2c572206eaa0f1e6fd1e6f8d08103e9a3cfb3bd4a3f35dbdb4")`,
            }}
          >
            <Card.Img
              src="https://static-images.vnncdn.net/files/publish/2023/3/2/hinh-anh-707.jpg"
              position="top"
              alt="Apple Computer"
            />
            <Card.Body>
              <div className="text-center">
                <Card.Title>Your Flight</Card.Title>
                <p className="text-muted mb-4">
                  Aircraft Model {boxvalue.aircraftModel}
                </p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Depart Airport :</span>
                  <span>{boxvalue.departAirport}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Arrival Airport :</span>
                  <span>{boxvalue.arrivalAirport}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Default Baggage</span>
                  <span>{boxvalue.defaultBaggage} kg</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Depart Time</span>
                  <span
                    className="badge text-dark text-wrap"
                    style={{ width: "6rem" }}
                  >
                    {boxvalue.departTime}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Arrival Time</span>
                  <span
                    className="badge text-dark text-wrap"
                    style={{ width: "6rem" }}
                  >
                    {boxvalue.arrivalTime}
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Flight Price</span>
                <span>{VND.format(getPrice())}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FlightInfo;
