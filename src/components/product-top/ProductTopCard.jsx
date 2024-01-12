import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'

const ProductTopCard = ({ srcImage, title, key }) => {
    return (
        <Card key={key} className='product-card product-top-card' style={{ width: '21rem', border: 'none' }}>
            <img alt="Card cap" src={srcImage} width="100%" height={'400px'} />
            <div className='product-top-title'>
                <a href='#'>
                    {title}
                </a>
            </div>
        </Card>
    )
}

export default ProductTopCard
