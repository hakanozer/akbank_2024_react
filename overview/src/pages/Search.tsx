import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import LoadGif from '../assets/loader.gif'

function Search() {
  
  const [load, setLoad] =  useState(false)
  const [proArr, setProArr] = useState<Product[]>([])
  const [params, setParams] = useSearchParams()
  useEffect(() => {
    const q = params.get('q')
    if (q) {
        setLoad(true)
        setProArr([])
        searchProduct(q).then(res => {
          const dt = res.data
          setProArr(dt.products)
          setLoad(false)
        })
    }
  }, [params])
    
  return (
    <>
        <h2>Search</h2>
        { load === true &&
          <center><img  src={LoadGif} width={200} /></center>
        }
        
        <div className='row'>
        { proArr.map( (item, index) => 
          <ProductItem key={index} item={item} />
        )}
        </div>
    </>
  )
}

export default Search