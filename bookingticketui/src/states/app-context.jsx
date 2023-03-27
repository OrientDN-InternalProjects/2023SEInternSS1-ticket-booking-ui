import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [response, setResponse] = useState({
    depart: "",
    arrival: "",
    dateDepart: "",
    numPeople: 1.0,
  });
  const [flight, setFlight] = useState();
  return (
    <AppContext.Provider value={{ response, setResponse }}>
      {children}
    </AppContext.Provider>
  );
};
