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

export const likeControl = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        try {
            // control
            const arr = JSON.parse(stLikes) as number[]
            const index = arr.findIndex(item => item === id)
            if (index === -1) {
                // add
                arr.push(id)
            }else {
                // remove
                arr.splice(index, 1)
            }
            const stArr = JSON.stringify(arr)
            localStorage.setItem('likes', stArr)
        } catch (error) {
            localStorage.removeItem('likes')
        }
    }else {
        const arr = [id]
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr)
    }
}

export const allLikes = () => {
    const stArr = localStorage.getItem('likes')
    if (stArr) {
        try {
            const arr = JSON.parse(stArr) as number[]
            return arr
        } catch (error) {
            localStorage.removeItem('likes')
        }
    }
    return []
}