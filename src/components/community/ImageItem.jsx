import React from 'react'

const ImageItem = ({src}) => {
    return (
        
            <div style={{ width: '100%', visibility: 'visible', animationDuration: '0s' }} className="animation home-community-img fadeIn">
                <img src={src} style={{ objectFit: 'cover' }} />
            </div>
        
    )
}

export default ImageItem
