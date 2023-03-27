import React, { useContext } from "react";
import "../booking-form/booking.css";
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getAirports, getSearch } from "../../services/search-services";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../states/app-context";

const bookingModel = ({ dataSubmit }) => {
  const [boxvalue, setBoxvalue] = useState([]);

  const { setResponse } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      getAirports().then((res) => setBoxvalue(res.data.result));
    })();
  }, []);

  const validationSchema = Yup.object().shape({
    depart: Yup.string().required("Depart is required"),
    arrival: Yup.string()
      .notOneOf(
        [Yup.ref("depart"), null],
        "The arrival airport must not same the depart airport"
      )
      .required("Arrival is required"),
    dateDepart: Yup.string().required("Date of depart is required"),
    numPeople: Yup.number().required("Must have passenger"),
  });

  const onSubmit = async () => {
    let result = await getSearch(
      dataSubmit.depart,
      dataSubmit.arrival,
      dataSubmit.dateDepart
    );
    // result = await result.data;

    if (result?.isError) {
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
