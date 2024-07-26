import { IProducts, Product } from "../models/IProducts"
import { apiConfig } from "./apiConfig"

export const getAllProduct = () => {
    return apiConfig.get<IProducts>('products')
}

export const singleProduct = (id: string) => {
    return apiConfig.get<Product>('products/'+id)
}

export const searchProduct = (q: string) => {
    return apiConfig.get<IProducts>('products/search?q='+q)
}