import React from "react";
import { useState } from "react";
import { createTicketAPIEndpoint, ENDPOINTS } from "../../api/AuthenticateAPI";
import {displayAlert} from "../notification/toast";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ticket-form.css"


const Ticket = () => {
  const [data, setData] = useState();
  const [formStatus, setFormStatus] = useState("Check");
  const [noti, setNoti] = useState();
  const [type, setType] = useState();
  const [conForm, setConFom] = useState({
    Code : ""
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
    
    setData(result);
    //console.log(error);
    if (result?.response?.status == 500)
    {
       console.log(result?.response?.status)
       setNoti("The code does not exist");
       setType("error");
    }
    else {
      setNoti("Get succefully");
      setType("success");
    }

    //console.log(result.response.data.isError);
    console.log(result);

  };

  
  return (
    <div>
      <div className="ticket-container">
      <h1 id="contactheader">Ticket detail</h1>

      <form onSubmit={submitForm}>
        {/* Reference cdoe form   */}
        <div className="input-box">
          <label className="form-label" htmlFor="Code">
            
          </label>
          <input
          style={{
            borderRadius: "5px",
            border: "1px solid"
          }}
            className="form-control"
            type="text"
            name="Code"
            id="Code"
            onChange={handleChange}
            required
          />
        </div>

        <button className="action-button" 
        type="submit" 
        onClick = {() => displayAlert(noti, type)}
        >
          Check!   
        </button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Ticket;
