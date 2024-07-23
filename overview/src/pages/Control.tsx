import React from 'react'
import { getUser } from '../utils/localStore'
import { Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Control( props: {item: JSX.Element } ) {

  const user = getUser()

  return (
    <>
    {user === null 
    ?
        <Navigate to='/' />
    :
        <>
            <NavBar item={user} />
            {props.item}
            <Footer />
        </>    
    }
    </>
  )
}

export default Control