import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../utils/localStore'

function Profile() {

  const navigate = useNavigate()
  useEffect(() => {
    const user = getUser()
    if (user === null) {
      navigate('/')
    }
  }, [])
  
  return (
    <>
        <NavBar />
        <h2>Profile</h2>
    </>
  )
}

export default Profile