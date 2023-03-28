import React, { useContext, useEffect, useState } from "react";
import Passenger from "../../components/passenger-form/passenger-form";
import ContactForm from "../../components/contact-form/contact-form";
import { AppContext } from "../../states/app-context";
import { requestBooking } from "../../services/booking-service";
import { Container, Card, Col, Form, Row, Button } from "react-bootstrap";
import { getListServices } from "../../services/booking-service";
import { ToastContainer, toast } from "react-toastify";

const PassengerPage = () => {
  const { flight, setFlight } = useContext(AppContext);
  const [boxvalue, setBoxvalue] = useState([]);
  const [selected, setSelected] = useState([""]);
  const [checked, setChecked] = useState([]);
  const [linkPay, setLinkPay] = useState({
    orderType: "booking",
    bookingId: "",
  });
  useEffect(() => {
    getListServices().then((res) => setBoxvalue(res.data.result));
  }, []);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  console.log(checked);
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlight({
      ...flight,
      ["extraServices"]: [...checked],
    });
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
    }else{
     setLinkPay({
      ...linkPay,
      ["bookingId"]: response,
    });
    console.log(linkPay);
    
  }
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
            <div className="checkList">
              <div className="title">Your CheckList:</div>
              <div className="list-container">
                {boxvalue.map((item, index) => (
                  <div key={index}>
                    <input
                      value={item.id}
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <span className={isChecked(item.nameService)}>
                      {item.nameService}
                    </span>
                  </div>
                ))}
              </div>
              <div>{`Items checked are: ${checkedItems}`}</div>
            </div>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default PassengerPage;
