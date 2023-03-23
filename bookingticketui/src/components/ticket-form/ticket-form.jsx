import React from "react";
import { useParams } from "react-router-dom";
import { Col, Divider, Row, Table } from 'antd';
import { useState, useEffect, Fragment } from "react";
import { createTicketAPIEndpoint, ENDPOINTS } from "../../api/AuthenticateAPI";



const Ticket = () => {
  //const navigate = useNavigate();
  const [data, setData] = useState();
  const [formStatus, setFormStatus] = useState("Check");
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
    let result = await createTicketAPIEndpoint(ENDPOINTS.bill, conForm.Code
    );
    
    setData(result);

    // if (result.length === 0)
    // {
    //   alert("The code does not exist")
    // }
  };


  console.log(data);

  return (
    <div>
      <div className="signup-container">
      <h1 id="contactheader">Contact details</h1>

      <form onSubmit={submitForm}>
        {/* Reference cdoe form   */}
        <div className="mb-3">
          <label className="form-label" htmlFor="Code">
            Reference code
          </label>
          <input
            className="form-control"
            type="text"
            name="Code"
            id="Code"
            //value = {conForm.Code}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Ticket;
