import React, { useContext } from "react";
import Passenger from "../../components/passenger-form/passenger-form";
import ContactForm from "../../components/contact-form/contact-form";
import { AppContext } from "../../states/app-context";
const PassengerPage = () => {
  const { flight } = useContext(AppContext);
  return (
    <div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Passenger />
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default PassengerPage;
