import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:'https://employeemanagementjwt.herokuapp.com'
})