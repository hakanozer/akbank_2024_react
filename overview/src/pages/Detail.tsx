import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleProduct } from '../services/productService'

function Detail() {

  const [error, setError] = useState('')  
  const params = useParams()
  useEffect(() => {
    setError('')
    const id = params.id
    if (id) {
        // detail service
        singleProduct(id).then(res => {
            const pro = res.data
            console.log(pro)
        }).catch(err => {
            setError(err.response.data.message)
        })
    }
  }, [])
    
  return (
    <>
        { error !== '' && 
            <div className="alert alert-light text-center" role="alert">
                {error}
            </div>
        }
    </>
  )
}

export default Detail