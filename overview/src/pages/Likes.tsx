import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { singleProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import axios from 'axios'
import Seo from '../components/Seo'

function Likes() {

  const [proArr, setProArr] = useState<Product[]>([])
  const appContext = useContext(AppContext)

  /*
  useEffect(() => {
    const newArr:Product[] = []
    for (let i = 0; i < appContext.likes.length; i++) {
        const id = appContext.likes[i];
        singleProduct(""+id).then(res => {
            const item = res.data
            newArr.push(item)
            setTimeout(() => {
                setProArr(newArr)
            }, 300);
        })
    }
  }, [])
  */

  useEffect(() => {
    axios.all(appContext.likes.map((id) => singleProduct(""+id))).then(resArr => {
        const newArr:Product[] = []
        resArr.map(res => {
            const item = res.data
            newArr.push(item)
        })
        setProArr(newArr)
    })
}, [])

  
    
  return (
    <>
        <Seo title='Likes' desc='Likes Page' />
        <h2>Likes</h2>
        <div className='row'>
        { proArr.map( (item, index) => 
          <ProductItem key={index} item={item} />
        )}
        </div>
    </>
  )
}

export default Likes