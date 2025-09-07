import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    // navigate("/login")
  }
  return (
    <>
      <div>Home</div>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Home