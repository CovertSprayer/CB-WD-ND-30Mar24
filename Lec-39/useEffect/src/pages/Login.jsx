import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div>Login</div>
      <Link to="/">Go to Home</Link>
        <br />
      <Link to="/signup">Go to Signup</Link>
    </>
  )
}

export default Login