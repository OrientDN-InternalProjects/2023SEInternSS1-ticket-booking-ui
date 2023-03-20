import React from "react";
import Passenger from "../../components/PassengerForm/Passenger";
import ContactForm from "../../components/ContactDetail/ContactForm";

const PassengerPage = () => {
  return (
    <div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Passenger />
      </div>
    </div>
  );
};

export default PassengerPage;
