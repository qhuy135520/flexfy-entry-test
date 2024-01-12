import React from 'react'
import './home-joining.css'
const HomeJoining = () => {
    return (
        <div className="home-joining">
            <div className="home-joining-image home-joining-background">
                <div className='home-joining-top' style={{marginTop:'130px'}}>
                    <span className='home-joining-text-1'>
                        Promotion for Member<br />
                    </span>
                    <span className='home-joining-text-2'>
                        Sign up now and get <span >₱50</span> Coupon
                    </span>
                    <br />
                    <button className="link_btn_0">
                        <a href="#">
                            Join Rewards
                        </a>
                    </button>
                </div>
            </div>
            <div className="home-joining-image home-joining-disapear">
                <img src="https://www.lavoz.com.ar/resizer/HDwn2fYqzZ1j9vf81aHIQcHNxOU=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/JX6RJE6HCNADZK5BPZYN5CMWLU.jpg" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    )
}

export default HomeJoining
