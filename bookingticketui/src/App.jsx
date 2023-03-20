import React, { useState } from "react";
import ListFlight from "./pages/ListFlight/ListFlight";
import Booking from "./components/BookingForm";
import ListSearch from "./pages/ListSearch/ListSearch";
import ContactForm from "./components/ContactDetail/ContactForm";
import PassengerPage from "./pages/PassengerPage/PassengerPage";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const [response, setResponse] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Booking setResponse={setResponse} />} />
        <Route path="/contact-detail" element={<ContactForm />} />
        <Route index path="/list-flight" element={<ListFlight />} />
        <Route
          index
          path="/list-search/:depart/:apart/:date"
          element={<ListSearch response={response} />}
        />

        <Route index path="/passenger-form" element={<PassengerPage />} />
      </Routes>
    </div>
  );
};

export default App;
