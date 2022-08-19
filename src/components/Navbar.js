import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <Link to='/'>
        <div className='navbar'>
          <h1>LOGO</h1>
          <div className="navigation_bar">
            <ul>
              <li><a href="#">Cryptocurrencies</a></li>
              <li><a href="#">Exchanges</a></li>
              <li><a href="#">NFT</a></li>
              <li><a href="#">Learn Crypto</a></li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Navbar