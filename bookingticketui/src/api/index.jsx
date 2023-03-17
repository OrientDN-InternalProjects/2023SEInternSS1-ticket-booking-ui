import axios from 'axios'

export const BASE_URL = 'http://localhost:7089/';

export const ENDPOINTS = {
    requestcontact: 'request-contact',
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + 'Booking/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}