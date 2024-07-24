import { IProducts } from "../models/IProducts"
import { apiConfig } from "./apiConfig"

export const getAllProduct = () => {
    return apiConfig.get<IProducts>('products')
}