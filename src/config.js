import axios from 'axios'
export const axiosInstance = axios.create({
    baseUrl:'https://employeemanagementjwt.herokuapp.com/'
})