import React from 'react'
import ImageFlexfyLogoPath from '../../assets/images/flexfy-logo.png'
import CartIcon from '../../assets/icons/cart.svg';
import UserIcon from '../../assets/icons/user.svg'
import SearchIcon from '../../assets/icons/search.png'

const BannerLogo = () => {
  return (
    <div className="flexfy-section">
      <div className="drawler"></div>
      <div className='banner'>
        <div className='banner-list'>
          <div className="list-other">
            <a className='item-link' href='#'>rewards</a>
            <a className='item-link' href='#'>fit guide</a>
          </div>
        </div>
        <div className='banner-logo' aria-label='logo'>
          <img src={ImageFlexfyLogoPath} alt='banner logo' />
        </div>
        <div className='div banner-option'>
          <div className='search-wrapper'>
            <input type='text' className='menu-search' placeholder='Search' />
            <img className='menu-search-icon' style={{ width: '30px', height: '30px', marginTop: '5px' }} src={SearchIcon} />
          </div>
          <div className='div menu-right menu-right-display'>
            <div className='item cart-toggle'>
              <div className="overlap-group">
                <a href="#" id="account-link">
                  <img id="user-icon" alt="flexfy-user-icon" aria-label="flexfy-user-icon" src={UserIcon} loading="lazy" className="hover-pointer" />
                </a>
              </div>
            </div>

            <img id="cart-icon" alt="flexfy-cart-icon" aria-label="flexfy-cart-icon" src={CartIcon} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerLogo
