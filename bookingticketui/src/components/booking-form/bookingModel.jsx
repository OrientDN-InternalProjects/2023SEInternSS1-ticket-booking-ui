import React from "react";
import "../booking-form/booking.css";
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getAirports, getSearch } from "../../services/search-services";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const bookingModel = ({ dataSubmit }, { setResponse }) => {
  const [boxvalue, setBoxvalue] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      getAirports().then((res) => setBoxvalue(res.data.result));
    })();
  }, []);

  const validationSchema = Yup.object().shape({
    depart: Yup.string().required("Depart is required"),
    arrival: Yup.string()
      .notOneOf([Yup.ref("depart"), null], "Arrial must not same depart")
      .required("Arrival is required"),
    dateDepart: Yup.string().required("Date of depart is required"),
  });

  const onSubmit = async () => {
    let result = await getSearch(
      dataSubmit.depart,
      dataSubmit.arrival,
      dataSubmit.dateDepart
    );
    result = await result.json();
    if (result.isError === true) {
      toast.error("Invalid Flight !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    } else {
      setResponse(dataSubmit);
      navigate(
        `/list-search/${dataSubmit.depart}/${dataSubmit.arrival}/${dataSubmit.dateDepart}`
      );
    }
  };
  return {
    validationSchema,
    boxvalue,
    onSubmit,
  };
};

export default bookingModel;
