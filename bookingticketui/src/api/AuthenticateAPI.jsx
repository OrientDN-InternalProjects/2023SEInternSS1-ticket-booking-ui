import axios from 'axios'

export const BASE_URL = 'https://localhost:7089/';

export const ENDPOINTS = {
    signup: 'sign-up',
}

export const createAuthenticateAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + 'authenticate/' + endpoint + '/';
    return {
        post: newRecord => axios.post(url, newRecord)
    }
}