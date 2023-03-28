import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [response, setResponse] = useState({
    depart: "",
    arrival: "",
    dateDepart: "",
    numPeople: 1.0,
  });
  const [flight, setFlight] = useState({
    contact: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    isRoundFlight: false,
    isBusiness: false,
    userId: null,
    flightId: "",
    roundFlightId: "",
    passes: [
      {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        nation: "",
        identityCard: "",
        provideNa: "",
        expDate: "",
      },
    ],
    services: [],
  });
  return (
    <AppContext.Provider value={{ response, setResponse, setFlight, flight }}>
      {children}
    </AppContext.Provider>
  );
};
