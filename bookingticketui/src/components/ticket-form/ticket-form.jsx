import React from "react";
import { useState } from "react";
import { createTicketAPIEndpoint, ENDPOINTS } from "../../api/api-collector";
import { useNavigate } from "react-router-dom";
import { displayAlert } from "../notification/toast";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import "./ticket-form.css";

const DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const Ticket = () => {
  const [data, setData] = useState({});
  const [formStatus, setFormStatus] = useState("Check");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [conForm, setConFom] = useState({
    Code: "",
  });
  const handleChange = (event) => {
    setConFom({
      ...conForm,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    console.log(conForm.Code);
    let result = await createTicketAPIEndpoint(ENDPOINTS.bill, conForm.Code);

    let message = "";
    let type = "";

    if (result?.response?.status == 500) {
      console.log(result?.response?.status);
      message = "The code does not exist";
      type = "error";
      displayAlert(message, type);
      setShow(false);
    } else {
      message = "Get succefully";
      type = "success";
      displayAlert(message, type);
      setData(result);
      console.log(result);
      setShow(true);
    }
  };

  return (
    <div>
      <div className="ticket-container">
        <h1 id="contactheader">Ticket detail</h1>

        <form onSubmit={submitForm}>
          {/* Reference cdoe form   */}
          <div className="input-box">
            <label className="form-label" htmlFor="Code"></label>
            <input
              style={{
                borderRadius: "5px",
                border: "1px solid",
              }}
              className="form-control"
              type="text"
              name="Code"
              id="Code"
              onChange={handleChange}
              required
            />
          </div>

          <button className="action-button" type="submit">
            Check!
          </button>

          <div className="information">
            {show ? (
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="src\assets\top-icon.png" />

                <Card.Body>
                  <Card.Title>Ticket reference code: {conForm.Code}</Card.Title>
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Seat Type: {data.result?.data?.tickets[0].passengerName}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Paid: {data.result?.data?.isPaid ? "Paid" : "Not yet"}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Number of people: {data.result?.data?.numberPeople}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Type of flight:
                    {data.result?.data?.isRoundFlight
                      ? "Round-trip"
                      : "One-way"}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Boarding time:{" "}
                    {format(
                      new Date(data.result?.data?.tickets[0].departureTime),
                      "dd/MMMM/yyyy"
                    )}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Seat Type: {data.result?.data?.tickets[0].seatClass}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Depart location:{" "}
                    {data.result?.data?.tickets[0].locationFrom}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Arrival location: {data.result?.data?.tickets[0].locationTo}
                  </ListGroup.Item>
                </ListGroup>

                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
