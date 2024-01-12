import React from 'react'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
const PromoBar = () => {
    return (
        <div>
            <div className='promo-bar'>
                <div style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s' }} className="animation fadeIn">
                    <a>
                        <div>
                            <p>Sign up now and get <span>₱50</span> coupon</p>
                        </div>
                    </a>

                </div>
                <div className="btn-next">
                    <img alt="arrow-right" height="15" width="15" aria-label="arrow-right" src={ArrowLeft} loading="lazy" />
                </div>
            </div >
        </div>
    )
}

export default PromoBar
