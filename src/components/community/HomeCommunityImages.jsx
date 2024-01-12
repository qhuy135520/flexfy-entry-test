import React from 'react'
import './home-community-images.css'
import ImageItem from './ImageItem'
import Image1 from '../../assets/images/home-images/images-1.webp'
import Image2 from '../../assets/images/home-images/images-2.jpg'
import Image3 from '../../assets/images/home-images/images-3.jpg'
import Image4 from '../../assets/images/home-images/images-4.webp'

const HomeCommunityImages = () => {
    return (
        <div className='home-community-images'>
            <div className="home-community-wrapper">
                <ImageItem src={Image1} />
                <ImageItem src={Image2} />
                <ImageItem src={Image3} />
                <ImageItem src={Image4} />
            </div>
        </div>
    )
}

export default HomeCommunityImages
