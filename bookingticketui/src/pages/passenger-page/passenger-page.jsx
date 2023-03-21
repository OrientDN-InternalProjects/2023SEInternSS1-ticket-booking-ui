import React from "react";
import Passenger from "../../components/passenger-form/passenger-form";
import ContactForm from "../../components/contact-form/contact-form";

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
