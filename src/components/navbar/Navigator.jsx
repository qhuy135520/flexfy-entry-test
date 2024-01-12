import React, { useState } from 'react'
import './navigator.css'
import PromoBar from './PromoBar';
import CartIcon from '../../assets/icons/cart.svg';
import UserIcon from '../../assets/icons/user.svg'
import ImageFlexfyLogoPath from '../../assets/images/flexfy-logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
} from 'reactstrap';
import BannerLogo from './BannerLogo';




const Navigator = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <PromoBar />

      <Navbar style={{ padding: '0px', backgroundColor: 'white !important' }} light expand="xl">

        <div className="flexfy-section">
          <div className="drawler"></div>
          <div style={{ padding: '0px' }} className='banner'>

            <div className='div banner-option-collapse'>
              <div className='search-wrapper'>
              </div>
              <div className='div menu-right'>
                <div className='item cart-toggle'>
                  <div className="overlap-group">
                    <a href="#" id="account-link">
                      <img id="user-icon" alt="flexfy-user-icon" aria-label="flexfy-user-icon" src={UserIcon} loading="lazy" className="hover-pointer" />
                    </a>
                  </div>
                </div>
                <img id="cart-icon" alt="flexfy-cart-icon" aria-label="flexfy-cart-icon" src={CartIcon} loading="lazy" />
              </div>
              <div className='banner-logo-display' aria-label='logo'>
                <img src={ImageFlexfyLogoPath} alt='banner logo' />
              </div>
            </div>
          </div>
        </div>

        <NavbarToggler onClick={toggle} className='ml-auto' />
        <Collapse isOpen={isOpen} navbar>

          <div style={{ width: '100%' }} className='flexfy-section'>
            <BannerLogo />
            <div className="header-menu">
              <div id="nav-menu" className="menu">
                <div className="list"><span className="toggle-menu close-icon">
                </span>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title menu-title-collection">Summer vibe collection <span className='bras-year'>2023</span></span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">New</span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">Best sellers</span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">Shirt</span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">Jean</span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">Jacket</span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">Clothing & Accessories</span>
                  </a>
                  <a href="#" style={{ color: '#333' }} className="bras-wrapper false">
                    <span className="menu-title">Collections</span>
                  </a>
                  <a href="#" style={{ color: 'red' }} className="bras-wrapper false">
                    <span className="menu-title">Sale</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Navigator
