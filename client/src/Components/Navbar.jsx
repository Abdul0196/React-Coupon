import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container d-flex j-sb">
            <Link to="/" className='logo'><img src='http://localhost:3000/images/Logo.svg' alt="" /></Link>
            <div className="srchbx">
              <input type="text" placeholder='Search Here'/>
              <button className='icon-search'>
                
              </button>
            </div>
            <div className='nvlnks'>
              <Link to="/">Home</Link>
              <Link to="/">Store</Link>
              <Link to="/categories">Categories</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar