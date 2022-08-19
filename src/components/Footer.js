import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <>
      <Link to='/'>
        <div className='footer'>
          <h1>Footer</h1>
          <div className="footer_bar">
            <ul>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">About Cryptocurrency</a></li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Footer