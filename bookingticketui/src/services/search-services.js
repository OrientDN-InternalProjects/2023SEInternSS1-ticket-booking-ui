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

export const getSearch = async (depart, arrival, date)=>{
    try {
        const response = await axios.get(
            baseURL+`/api/FlightControllers/GetflightByRequest?DepartCode=${depart}&ArrivalCode=${arrival}&DepartDate=${date}`,
            {
              
            })
        return response
    } catch (error) {
        console.log(error)
    }
};

