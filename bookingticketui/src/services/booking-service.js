import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export const baseURL = 'https://localhost:7089'
export const axiosBaseURL = axios.create({
    baseURL: baseURL
});
export const requestBooking = async (flight)=>{
     return await axios.post(baseURL+`/api/booking/request-booking`, {
        contact: flight.contact,
        isRoundFlight: flight.isRoundFlight,
        isBusiness: flight.isBusiness,
        userId: flight.userId,
        flightId: flight.flightId,
        roundFlightId: flight.roundFlightId,
        passes: flight.passes,
        extraServices: flight.extraServices
      }).then(res => res.data.result)
      .catch((e) => {
        return e.response.data
      });
};

export const getListServices =()=>{
    return axiosBaseURL.get('/api/Booking/get-service')
};