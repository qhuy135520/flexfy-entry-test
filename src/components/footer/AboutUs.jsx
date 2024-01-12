import React from 'react'
import './about-us.css'

const AboutUs = () => {
    return (
        <div className="home-confidence">
            <div className="div-rich-text-wrapper">
                <div style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s', textAlign:'center' }} className="animation fadeIn">
                    <h1 className="heading-leisur-e-l">Confidence from within</h1>
                </div>
                <div style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s', marginTop:'25px' }} className="animation fadeIn">
                    <p className="text-wrapper">Post your pictures on your instagram or facebook with hashtag #flexfy</p>
                </div>
                <div style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s' }} className="animation fadeIn">
                    <a href="#" className="link-button"><span>about us</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
