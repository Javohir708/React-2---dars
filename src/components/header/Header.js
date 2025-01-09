import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='navbar'>
          <div className='navbar__logo'>
            <img src={logo} alt="logo image" />
          </div>
          <ul className='navbar__collection'>
            <li className='navbar__item'>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li className='navbar__item'>
              <a href="#">
                <span>Product</span>
              </a>
            </li>
            <li className='navbar__item'>
              <a href="#">
                <span>Pricing</span>
              </a>
            </li>
            <li className='navbar__item'>
              <a href="#">
                <span>Testimonials</span>
              </a>
            </li>
            <li className='navbar__item'>
              <a href="#">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
          <div className='navbar__btn'>
            <button>Buy Now</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header