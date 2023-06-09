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
  const [tickets, setTickets] = useState([]);
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
    let result = await createTicketAPIEndpoint(ENDPOINTS.bill, conForm.Code);

    let message = "";
    let type = "";

    if (result?.response?.status == 500) {
      message = "The code does not exist";
      type = "error";
      displayAlert(message, type);
      setShow(false);
    } else {
      message = "Get succefully";
      type = "success";
      displayAlert(message, type);
      setData(result.result?.data);
      setTickets(result.result?.data?.tickets);
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
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {tickets.map((items) => (
                  <Card key={items.passengerName} style={{ width: "25rem" }}>
                    <div className="Ticket-Person">
                      <Card.Img variant="top" src="src\assets\top-icon.png" />

                      <Card.Body>
                        <Card.Title>
                          Ticket reference code: {conForm.Code}
                        </Card.Title>
                      </Card.Body>

                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          Name: {items.passengerName}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Paid: {data.isPaid ? "Paid" : "Not yet"}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Number of people: {data.numberPeople}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Type of flight:
                          {data.isRoundFlight ? "Round-trip" : "One-way"}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Boarding time:{" "}
                          {format(
                            new Date(items.departureTime),
                            "dd/MMMM/yyyy"
                          )}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Seat Type: {items.seatClass}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Depart location: {items.locationFrom}
                        </ListGroup.Item>

                        <ListGroup.Item>
                          Arrival location: {items.locationTo}
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card>
                ))}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
