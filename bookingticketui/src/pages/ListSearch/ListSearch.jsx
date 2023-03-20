import React, { useState, useEffect, Fragment } from "react";
import "../../pages/ListFlight/List.css";
import Table from "react-bootstrap/Table";
import { Container, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const ListSearch = ({ response }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let result = await fetch(
        `https://localhost:7089/api/FlightControllers/GetflightByRequest?DepartCode=${response.departAirport}&ArrivalCode=${response.arrivalAirport}&DepartDate=${response.dateDepart}`,
        {
          method: "GET",
        }
      );
      result = await result.json();
      setData(result.result);
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
        <Table striped>
          <thead class="text-white bg-primary fw-bold ">
            <tr>
              <td>Image</td>
              <td>Aircraft Model</td>
              <td>Depart Airport</td>
              <td>Arrival Airport</td>
              <td>Depart Time</td>
              <td>Arrival Time</td>
              <td>Business Price</td>
              <td>Economy Price</td>
              <td>Remain BusinessSeat</td>
              <td>Remain EconomySeat</td>
              <td></td>
              <td></td>
            </tr>
          </thead>

          <tbody class="table-light">
            {data.map((data) => (
              <tr key={data.id}>
                <td>
                  <img src="https://img.icons8.com/nolan/64/airplane-take-off.png" />
                </td>
                <td>{data.aircraftModel}</td>
                <td>{data.departAirport}</td>
                <td>{data.arrivalAirport}</td>
                <td>{data.departTime}</td>
                <td>{data.arrivalTime}</td>
                <td>{data.businessPrice}</td>
                <td>{data.economyPrice}</td>
                <td>{data.remainBusinessSeat}</td>
                <td>{data.remainEconomySeat}</td>
                <td>
                  {" "}
                  <Button onClick={handleBusinessClick} variant="success">
                    Booking Business
                  </Button>{" "}
                </td>
                <td>
                  {" "}
                  <Button onClick={handleEconomyClick} variant="warning">
                    Booking Economy
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ListSearch;
