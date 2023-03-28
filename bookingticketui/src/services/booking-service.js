import axios from "axios";

export const baseURL = 'https://localhost:7089'
export const axiosBaseURL = axios.create({
    baseURL: baseURL
});
export const requestBooking = async (flight)=>{
     response = await axiosBaseURL.post("https://localhost:7089/api/booking/request-booking", {
        contact: flight.contact,
        isRoundFlight: flight.isRoundFlight,
        isBusiness: flight.isBusiness,
        userId: flight.userId,
        flightId: flight.flightId,
        roundFlightId: flight.roundFlightId,
        passes: flight.passes,
        services: flight.services
      });
      return response;
};

export const getListServices =()=>{
    return axiosBaseURL.get('/api/Booking/get-service')
};