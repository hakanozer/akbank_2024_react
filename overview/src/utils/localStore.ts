import { IUser } from "../models/IUser";
import { decrypt, encrypt } from "./util";

export const userStore = (user: IUser) => {
    const stUser = JSON.stringify(user)
    const cipherText = encrypt(stUser)
    localStorage.setItem("user", cipherText)
}

export const getUser = () => {
    const stUser = localStorage.getItem("user")
    if(stUser) {
        try {
            const plainText = decrypt(stUser)
            const user = JSON.parse(plainText) as IUser
            return user
        } catch (error) {
            localStorage.removeItem('user')
        }
    }
    return null
}