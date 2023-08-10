import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
   <nav>
    <div>Logo</div>
    <div>
        <ol>
            <Link to="/Resister">Register</Link>
            <Link to="/Login">Login</Link>
        </ol>
    </div>
   </nav>
  )
}

export default Nav