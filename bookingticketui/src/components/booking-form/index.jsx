import React from "react";
import "../booking-form/booking.css";
import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bookingModel from "./bookingModel";

const Booking = () => {
  const [dataSubmit, setDataSubmit] = useState({
    depart: "",
    arrival: "",
    dateDepart: "",
    numPeople: 1.0,
  });

  const updateChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    setDataSubmit((existingValues) => ({
      ...existingValues,
      [fieldName]: e.target.value,
    }));
  };
  const { validationSchema, boxvalue, onSubmit } = bookingModel({ dataSubmit });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="card p-4 mt-5">
          <div class="row g-3">
            <div class="col-12 mb-4">
              <h4 class="text-center mt-10">
                Flight Booking
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-search-airport-kiranshastry-gradient-kiranshastry.png" />
              </h4>
              <span class="text-muted">Have chill with your flight</span>
            </div>
            <div class="col-12">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="Roundtrip"
                  value="option1"
                />
                <label class="form-check-label" for="Roundtrip">
                  Roundtrip
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="Oneway"
                  value="option2"
                />
                <label class="form-check-label" for="Oneway">
                  One way
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-floating">
                <select
                  name="depart"
                  className="form-control"
                  {...register("depart")}
                  onChange={updateChange}
                >
                  <option>--Select Depart Airport--</option>
                  {boxvalue.map((getcon) => (
                    <option key={getcon.id} value={getcon.code}>
                      {" "}
                      {getcon.code},{getcon.name}
                    </option>
                  ))}
                </select>
                <div style={{ color: "red" }}>{errors.depart?.message}</div>
                <label>FLYING FROM</label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-floating">
                <select
                  name="arrival"
                  className="form-control"
                  {...register("arrival")}
                  onChange={updateChange}
                >
                  <option>--Select Arival Airport--</option>
                  {boxvalue.map((getcon) => (
                    <option key={getcon.id} value={getcon.code}>
                      {" "}
                      {getcon.code},{getcon.name}
                    </option>
                  ))}
                </select>
                <div style={{ color: "red" }}>{errors.arrival?.message}</div>
                <label>FLYING TO</label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-floating">
                <input
                  name="numPeople"
                  type="number"
                  max={7}
                  min={1}
                  class="form-control"
                  placeholder={1}
                  {...register("numPeople")}
                  onChange={updateChange}
                />
                <div style={{ color: "red" }}>{errors.numPeople?.message}</div>
                <label>Number People</label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-floating">
                <input
                  name="dateDepart"
                  type="date"
                  class="form-control"
                  placeholder="DEPARTING"
                  {...register("dateDepart")}
                  onChange={updateChange}
                />
                <div style={{ color: "red" }}>{errors.dateDepart?.message}</div>
                <label>DEPARTING</label>
              </div>
            </div>
            <div class="col-12 mt-4">
              <button class="btn btn-primary text-uppercase" type="submit">
                SHOWN FLIGHTS<i class="fa fa-plane ms-3"></i>
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </form>
    </Container>
  );
};

export default Booking;
