import React, { useContext } from "react";
import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getAirports, getSearch } from "../../services/search-services";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../states/app-context";

const searchModel = ({ dataSubmit }) => {
  const [boxvalue, setBoxvalue] = useState([]);
  const navigate = useNavigate();
  const { response, setResponse } = useContext(AppContext);
  useEffect(() => {
    (async () => {
      await getAirports().then((res) => setBoxvalue(res.data.result));
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
    dateDepart: Yup.date()
      .min(new Date(), "Date is too early")
      .required("Date of depart is required"),
    numPeople: Yup.number().required("Must have passenger"),
  });

  const onSubmit = async () => {
    let result = await getSearch(
      dataSubmit.depart,
      dataSubmit.arrival,
      dataSubmit.dateDepart
    );
    if (result?.isError) {
      toast.error("Invalid Flight !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate(
        `/list-search/${response.depart}/${response.arrival}/${response.dateDepart}`
      );
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

export default searchModel;
