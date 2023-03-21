import axios from "axios";
export const baseURL = 'https://localhost:7089'

export const axiosBaseURL = axios.create({
    baseURL: baseURL
});

export const getAirports =()=>{
    return axiosBaseURL.get('/api/Airport/airports')
};

export const getListFlights =()=>{
    return axiosBaseURL.get('/api/FlightControllers')
};

export const getSearch =(depart,arrival, date)=>{
    return fetch(
        baseURL+`/api/FlightControllers/GetflightByRequest?DepartCode=${depart}&ArrivalCode=${arrival}&DepartDate=${date}`,
        {
          method: "GET",
        })
};
