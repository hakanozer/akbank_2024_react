import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { singleProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import { likeControl } from '../utils/localStore'

function Detail() {

  const location = useLocation()
  useEffect(() => {
    const data = location.state
    if (data !== null) {
      const prod = data as Product
      console.log(prod)
    }
  }, [])
  

  const [bigImage, setBigImage] = useState('')
  const [error, setError] = useState('')
  const [item, setItem] = useState<Product>()
  const params = useParams()
  useEffect(() => {
    setError('')
    const id = params.id
    if (id) {
        // detail service
        singleProduct(id).then(res => {
            const pro = res.data
            setItem(pro)
            setBigImage(pro.images[0])
        }).catch(err => {
            setError(err.response.data.message)
        })
    }
  }, [])

  const fncLikeControl = (id: number) => {
    likeControl(id)
  }
    
  return (
    <>
        { error !== '' && 
            <div className="alert alert-light text-center" role="alert">
                {error}
            </div>
        }
        { item && 
          <>
            <div className='row'>
              <div className='col-sm-6'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h2><span className="badge text-bg-danger">{item.price}₺</span></h2>
                { item.tags.map((tag, index ) => 
                  <span key={index} className="badge text-bg-secondary" style={{marginRight: 3,}}>{tag}</span>
                )}
                <div className='mt-3'>
                  <img src={item.meta.qrCode} width={150} className='img-thumbnail' />
                </div>
                <i onClick={ () => fncLikeControl(item.id)} role='button' className="bi bi-suit-heart" style={{fontSize: 40,}}></i>
              </div>
              <div className='col-sm-6'>
                <img src={bigImage} className='img-fluid' style={{height: 450,}}  />
                <div className='mt-3'>
                    {item.images.map((url, index) => 
                      <img key={index} onClick={(evt) => setBigImage(url)} src={url} className='img-thumbnail' style={{height: 125, marginRight: 3,}} />
                    )}
                </div>
              </div>
            </div>
          </>
        }
    </>
  )
}

export default Detail