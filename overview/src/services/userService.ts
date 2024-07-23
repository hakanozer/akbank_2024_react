import { apiConfig } from "./apiConfig"

export const userLogin = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return apiConfig.post('auth/login', sendObj)
}