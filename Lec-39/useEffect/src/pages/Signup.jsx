import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div>Signup</div>

      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
    </>
  )
}

export default Signup