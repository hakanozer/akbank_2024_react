import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { getUser } from '../utils/localStore'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()
  useEffect(() => {
    const user = getUser()
    if (user === null) {
      navigate('/')
    }
  }, [])

  return (
    <>
        <NavBar/>
        <h2>Dashboard</h2>
    </>
  )
}

export default Dashboard