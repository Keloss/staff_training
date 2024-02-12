import { $authHost, $host } from "./index";
import {jwtDecode as jwt_decode} from 'jwt-decode';


export const registration = async (Employer_Name, email, password) => {
    const {data} = await $host.post('api/employer/registration', {Employer_Name, email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (Employer_Name, email, password) => {
    const {data} = await $host.post('api/employer/login', {Employer_Name, email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.post('api/employer/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
