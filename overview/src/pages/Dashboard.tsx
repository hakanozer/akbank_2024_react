import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../services/productService'
import { Product } from '../models/IProducts'

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
          <div className='col-sm-4 mb-3'>
            <div className="card">
              <img src={item.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.brand}</p>
                <p className='card-text'>{item.price}₺</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        )}
        </div>
    </>
  )
}

export default Dashboard