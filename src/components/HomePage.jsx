import React from 'react'
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
        <Link to="/about">About Page</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/head-tail">Head Tail Page</Link>
    </div>

  )
}

export default HomePage