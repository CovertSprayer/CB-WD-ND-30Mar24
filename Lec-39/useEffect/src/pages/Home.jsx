import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>

      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
    </>
  );
};

export default Home;
