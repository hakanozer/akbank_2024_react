import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Dashboard() {

  const [proArr, setProArr] = useState<Product[]>([])
  useEffect( () => {
    getAllProduct().then(res => {
      const arr = res.data
      setProArr(arr.products)
    })
  } , [])

  return (
    <>
        <h2>Products</h2>
        <div className='row'>
        { proArr.map( (item, index) => 
          <ProductItem key={index} item={item} />
        )}
        </div>
    </>
  )
}

export default Dashboard