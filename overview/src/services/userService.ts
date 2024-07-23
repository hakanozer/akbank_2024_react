import { IUser } from "../models/IUser"
import { apiConfig } from "./apiConfig"

export const authLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return apiConfig.post<IUser>('auth/login', sendObj)
}