import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  
  const [params, setParams] = useSearchParams()
  useEffect(() => {
    const q = params.get('q')
    if (q) {
        console.log(q)
    }
  }, [params])
    
  return (
    <>
        <h2>Search</h2>
    </>
  )
}

export default Search