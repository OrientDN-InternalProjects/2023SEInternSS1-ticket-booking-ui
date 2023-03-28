import React, { useContext, useEffect, useState } from "react";
import Passenger from "../../components/passenger-form/passenger-form";
import ContactForm from "../../components/contact-form/contact-form";
import { AppContext } from "../../states/app-context";
import { requestBooking } from "../../services/booking-service";
import { Container, Card, Col, Form, Row, Button } from "react-bootstrap";
import { getListServices } from "../../services/booking-service";

const PassengerPage = () => {
  const { flight } = useContext(AppContext);
  const [boxvalue, setBoxvalue] = useState([]);
  const [selected, setSelected] = useState([""]);
  const [checkedState, setCheckedState] = useState(
    new Array(boxvalue.length).fill(false)
  );
  useEffect(() => {
    getListServices().then((res) => setBoxvalue(res.data.result));
  }, []);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce((currentState, index) => {
      if (currentState === true) {
        return setSelected(selected.concat(boxvalue[index]));
      }
      return selected.filter((fruit) => fruit !== boxvalue[index]);
    }, 0);

    setSelected(totalPrice);
  };
  console.log(selected);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(flight);
    const response = requestBooking(flight);
    alert(response.message);
  };
  return (
    <Container>
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
              class="btn btn-primary text-uppercase"
              onClick={(e) => handleSubmit(e)}
            >
              Continue to Payment
            </button>
          </div>
        </Col>
        <Col xs={3}>
          <Card xs={5}>
            {boxvalue.map((item, index) => {
              return (
                <div key={index}>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={item.nameService}
                        value={item.id}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>
                        {item.nameService} : {item.price}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PassengerPage;
