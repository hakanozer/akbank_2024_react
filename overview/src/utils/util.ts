import CryptoJS from 'crypto-js'

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : ''

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, key).toString()
    return cipherText
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, key)
    const plainText = bytes.toString(CryptoJS.enc.Utf8)
    return plainText
}


export const cities: string[] = [
    "İstanbul", "Ankara", "Bursa", "Samsun", "Antalya"
]