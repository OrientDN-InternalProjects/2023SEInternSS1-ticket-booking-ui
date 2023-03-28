import axios from "axios";

export const baseURL = 'https://localhost:7089'

export const requestBooking = async (flight)=>{
    await axios.post("https://localhost:7089/api/booking/request-booking", {
        contact: flight.contact,
        isRoundFlight: flight.isRoundFlight,
        isBusiness: flight.isBusiness,
        userId: flight.userId,
        flightId: flight.flightId,
        roundFlightId: flight.roundFlightId,
        passes: [
          {
            "firstName": "Thuy",
            "lastName": "nguyen",
            "dateOfBirth": "string",
            "nation": "string",
            "identityCard": "string",
            "provideNa": "string",
            "expDate": "string"
          },
             {
            "firstName": "NGoc ",
            "lastName": "tran",
            "dateOfBirth": "string",
            "nation": "string",
            "identityCard": "string",
            "provideNa": "string",
            "expDate": "string"
          }
        ],
        services: []
      });
      alert("Create contact sucessful");
};