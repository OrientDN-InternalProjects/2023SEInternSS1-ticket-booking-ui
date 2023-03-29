import React, { useState } from "react";
import ListFlight from "./pages/flights-page/list-flight";
import Booking from "./components/booking-form/index";
import ListSearch from "./pages/search-results-page/search-results";
import ContactForm from "./components/contact-form/contact-form";
import PassengerPage from "./pages/passenger-page/passenger-page";
import SignUp from "./components/sign-up/sign-up";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/navbar";
import Ticket from "./components/ticket-form/ticket-form";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Booking />} />
        <Route
          path="/list-search/:depart/:apart/:date"
          element={<ListSearch />}
        />
        <Route path="/contact-detail" element={<ContactForm />} />
        <Route index path="/list-flight" element={<ListFlight />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/ticket-form" element={<Ticket />} />
        <Route
          index
          path="/list-search/:depart/:apart/:date"
          element={<ListSearch response={response} />}
        />
        <Route index path="/passenger-form/:id" element={<PassengerPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
