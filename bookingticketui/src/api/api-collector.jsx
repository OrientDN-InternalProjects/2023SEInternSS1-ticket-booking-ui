import axios from "axios";

export const BASE_URL = "https://localhost:7089/";

export const ENDPOINTS = {
  signup: "sign-up",
  bill: "get-booking",
};

export const createAuthenticateAPIEndpoint = (endpoint) => {
  const url = `${BASE_URL}api/authenticate/${endpoint}/`;
  return {
    post: (newRecord) => axios.post(url, newRecord),
  };
};

export const createTicketAPIEndpoint = async (endpoint, code) => {
  try {
    const response = await axios.get(
      `${BASE_URL}api/Booking/${endpoint}?code=${code}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
