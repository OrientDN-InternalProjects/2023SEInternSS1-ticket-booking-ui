import React, { useContext, useEffect, useState } from "react";
import Passenger from "../../components/passenger-form/passenger-form";
import ContactForm from "../../components/contact-form/contact-form";
import { AppContext } from "../../states/app-context";
import { requestBooking, requestPayment } from "../../services/booking-service";
import { Container, Card, Col, Form, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import passengerModel from "./passenger-page-model";
import FlightInfo from "../../components/flight-info/flight-info";

const PassengerPage = () => {
  const { flight, setFlight } = useContext(AppContext);

  const [checked, setChecked] = useState([]);

  const navigate = useNavigate();

  const { boxvalue } = passengerModel();
  const handleCheck = (id, event) => {
    if (event.target.checked) {
      setChecked([...checked, id]);
    } else {
      setChecked(checked.filter((item) => item != id));
    }
  };

  console.log(checked);

  useEffect(() => {
    setFlight({
      ...flight,
      extraServices: checked,
    });
  }, [checked]);

  console.log(checked);

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await requestBooking(flight);
    if (response?.isError) {
      toast.error("Booking fail !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      let payInfor = { orderType: "booking", bookingId: response };
      let link = await requestPayment(payInfor);
      window.location.replace(link);
    }
  };
  return (
    <Container>
      <Card className="bg-light">
        <Card.Body>
          <Row>
            <Col xs={8}>
              <div>
                <ContactForm />
              </div>
              <div>
                <Passenger />
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary mb-5 text-uppercase"
                  onClick={(e) => handleSubmit(e)}
                >
                  Continue to Payment
                </button>
              </div>
            </Col>
            <Col xs={3}>
              <Row>
                <FlightInfo />
              </Row>
              <Row>
                <Col md="20">
                  <Card className="bg-light" style={{ width: "18rem" }}>
                    <Card.Body>
                      <div className="checkList">
                        <div className="title">Extra services:</div>
                        <div className="list-container">
                          {boxvalue.map((item, index) => (
                            <div key={index}>
                              <input
                                value={item.price}
                                type="checkbox"
                                onChange={(event) =>
                                  handleCheck(item.id, event)
                                }
                              />
                              <span className={isChecked(item.nameService)}>
                                {item.nameService}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default PassengerPage;
