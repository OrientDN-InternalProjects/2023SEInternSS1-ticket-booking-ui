import React, { useState, useEffect, Fragment } from "react";
import "../../pages/flights-page/list-model.css";
import Table from "react-bootstrap/Table";
import { Container, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
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

  const handleBusinessClick = async (event) => {
    navigate("/passenger-form");
  };

  const handleEconomyClick = async (event) => {
    navigate("/passenger-form");
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
                <td>{VND.format(data.businessPrice)}</td>
                <td>{VND.format(data.economyPrice)}</td>
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
