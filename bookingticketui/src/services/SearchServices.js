import axios from "axios";
export const BASE_URL = 'http://localhost:7089/'

export const getAirports =()=>{
    return axios.get('https://localhost:7089/api/Airport/airports')
};

export const getListFlights =()=>{
    return axios.get(`https://localhost:7089/api/FlightControllers`)
};

export const getSearch =(depart,arrival, date)=>{
    return fetch(
        `https://localhost:7089/api/FlightControllers/GetflightByRequest?DepartCode=${depart}&ArrivalCode=${arrival}&DepartDate=${date}`,
        {
          method: "GET",
        })
};