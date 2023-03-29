import { getListServices } from "../../services/booking-service";
import React, { useContext, useEffect, useState } from "react";

const passengerModel = () => {
  const [boxvalue, setBoxvalue] = useState([]);
  useEffect(() => {
    getListServices().then((res) => setBoxvalue(res.data.result));
  }, []);

  return { boxvalue };
};

export default passengerModel;
