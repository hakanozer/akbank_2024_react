import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <NavLink to='/dashboard'>Dashboard</NavLink> | 
        <NavLink to='/profile'> Profile</NavLink>
    </>
  )
}

export default NavBar