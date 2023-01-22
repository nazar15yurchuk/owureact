import axios from "axios";

const axiosService = axios.create({baseURL: 'http://jsonplaceholder.typicode.com'})

export {
    axiosService
}