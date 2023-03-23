import React, { useState } from "react";
import ListFlight from "./pages/flights-page/list-flight";
import Booking from "./components/booking-form/index";
import ListSearch from "./pages/search-results-page/search-results";
import ContactForm from "./components/contact-form/contact-form";
import PassengerPage from "./pages/passenger-page/passenger-page";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/navbar";
const App = () => {
  const [response, setResponse] = useState({
    depart: "",
    arrival: "",
    dateDepart: "",
    numPeople: 1,
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Booking setResponse={setResponse} />} />
        <Route path="/contact-detail" element={<ContactForm />} />
        <Route index path="/list-flight" element={<ListFlight />} />
        <Route
          path="/list-search/:depart/:apart/:date"
          element={<ListSearch response={response} setResponse={setResponse} />}
        />

        <Route index path="/passenger-form" element={<PassengerPage />} />
      </Routes>
    </div>
  );
};

export default App;
