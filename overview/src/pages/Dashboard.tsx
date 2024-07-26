import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import Seo from '../components/Seo'

function Dashboard() {

  const [proArr, setProArr] = useState<Product[]>([])
  useEffect( () => {
    getAllProduct().then(res => {
      const arr = res.data
      setProArr(arr.products)
    })
  } , [])

  const [searchData, setSearchData] = useState('')
  useEffect(() => {
    console.log(searchData)
  }, [searchData])
  return (
    <>
        <Seo title='Product List' desc='Product List Page' />
        <h2>Products</h2>
        <Search setSearch={setSearchData} placeholder='Product Search..' />
        <div className='row'>
        { proArr.map( (item, index) => 
          <ProductItem key={index} item={item} />
        )}
        </div>
    </>
  )
}

export default Dashboard