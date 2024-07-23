import { IUser } from "../models/IUser";

export const userStore = (user: IUser) => {
    const stUser = JSON.stringify(user)
    localStorage.setItem("user", stUser)
}

export const getUser = () => {
    const stUser = localStorage.getItem("user")
    if(stUser) {
        try {
            const user = JSON.parse(stUser) as IUser
            return user
        } catch (error) {
            localStorage.removeItem('user')
        }
    }
    return null
}