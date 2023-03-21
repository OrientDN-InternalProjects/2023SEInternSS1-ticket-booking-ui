import React from "react";
import "../booking-form/booking.css";
import { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAirports, getSearch } from "../../services/search-services";
import { useFormik } from "formik";
import * as Yup from "yup";

const Booking = ({ setResponse }) => {
  const [boxvalue, setBoxvalue] = useState([]);
  const [departAirport, setDepartAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [test, setTest] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      getAirports().then((res) => setBoxvalue(res.data.result));
    })();
  }, []);
  const dataSubmit = {
    departAirport,
    arrivalAirport,
    dateDepart,
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let result = await getSearch(
      dataSubmit.departAirport,
      dataSubmit.arrivalAirport,
      dataSubmit.dateDepart
    );
    result = await result.json();
    if (result.isError === true) {
      alert(result.responseException.exceptionMessage);
      navigate("/");
    } else {
      setResponse(dataSubmit);
      navigate(
        `/list-search/${dataSubmit.departAirport}/${dataSubmit.arrivalAirport}/${dataSubmit.dateDepart}`
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      depart: "",
      arrival: "",
      dateDepart: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      depart: Yup.string().required("Required!"),
      arrival: Yup.string()
        .required("Required!")
        .notOneOf([Yup.ref("depart")], "arrival must not same depart"),
      dateDepart: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      let result = getSearch(values.depart, values.arrival, values.dateDepart);
      result = result.json();
      if (result.isError === true) {
        alert(result.responseException.exceptionMessage);
        navigate("/");
      } else {
        setResponse(dataSubmit);
        navigate(
          `/list-search/${values.depart}/${values.arrival}/${values.dateDepart}`
        );
      }
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
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
                  name="c"
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
                  value={formik.values.depart}
                  onChange={formik.handleChange}
                >
                  <option>--Select Depart Airport--</option>
                  {boxvalue.map((getcon) => (
                    <option key={getcon.id} value={getcon.code}>
                      {" "}
                      {getcon.code},{getcon.name}
                    </option>
                  ))}
                </select>
                {formik.errors.depart && formik.touched.depart && (
                  <span>{formik.errors.depart}</span>
                )}
                <label>FLYING FROM</label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-floating">
                <select
                  name="arrival"
                  className="form-control"
                  value={formik.values.arrival}
                  onChange={formik.handleChange}
                >
                  <option>--Select Arival Airport--</option>
                  {boxvalue.map((getcon) => (
                    <option key={getcon.id} value={getcon.code}>
                      {" "}
                      {getcon.code},{getcon.name}
                    </option>
                  ))}
                </select>
                {formik.errors.arrival && formik.touched.arrival && (
                  <span>{formik.errors.arrival}</span>
                )}
                <label>FLYING TO</label>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-floating">
                <input
                  type="date"
                  name="dateDepart"
                  class="form-control"
                  placeholder="DEPARTING"
                  value={formik.values.dateDepart}
                  onChange={formik.handleChange}
                />
                {formik.errors.dateDepart && formik.touched.dateDepart && (
                  <span>{formik.errors.dateDepart}</span>
                )}
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
      </form>
    </Container>
  );
};

export default Booking;
