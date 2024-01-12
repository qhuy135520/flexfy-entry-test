import React from 'react'
import TiktokLogo from '../../assets/icons/tiktok-1.svg'
import InstaLogo from '../../assets/icons/Instagram-4.svg'
import './home-community-header.css'

const HomeCommunityHeader = () => {
    return (
        <div className="home-community-header">
            <div style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s' }} className="animation home-community-join slideInFromLeft">
                <h2>
                    join the community
                    <button className='home-community-contact link-button'>
                        <span>Become our KOLs</span>
                    </button>
                </h2>

            </div>
            <div style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s' }} className="animation home-community-social slideInFromRight">
                <a href="#" className="home-community-ista">
                    <img alt="Instagram" src={InstaLogo} style={{ objectFit: 'constant' }} />
                </a>
                <a href="#" className="home-community-tiktok">
                    <img alt="Tiktok" src={TiktokLogo} style={{ objectFit: 'constant' }} className="home-community-tiktok-img" />
                </a>
            </div>
        </div>

    )
}

export default HomeCommunityHeader
