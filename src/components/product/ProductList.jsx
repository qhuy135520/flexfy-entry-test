import React from 'react'
import './product.css'
import ProductCarousel from './ProductCarousel'

const ProductList = ({ heading, linkTitle, items}) => {
    return (
        <div id='best-seller'>
            <div id="product-list" className='undefined'>
                <div className="product-list-container">
                    <div className="product-list-header">
                        <div className="list-title">
                            <h1 className="heading-best">{heading}</h1>
                            <a href="#" className="link-button">
                                <span>{linkTitle}</span>
                            </a>
                        </div>
                    </div>
                    <ProductCarousel items={items} />
                </div>
            </div>
        </div>
    )
}

export default ProductList
