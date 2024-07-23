import axios from "axios";

export const apiConfig = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 15000,
    data: {ip: '192.168.0.0'},
    //headers: {token: 'token123TYKO'},
    //auth: {username: '', password: ''},
})