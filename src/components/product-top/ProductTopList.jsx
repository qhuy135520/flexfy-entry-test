import React from 'react'
import './product-top.css'
import ProductTopCarousel from './ProductTopCarousel'

const ProductTopList = ({heading, items}) => {
    const itemTopList = items
    return (
        <div id='best-seller'>
            <div id="product-list" className='undefined'>
                <div className="product-list-container">
                    <div className="product-list-header">
                        <div className="list-title">
                            <h1 className="heading-best">{heading}</h1>
                        </div>
                    </div>
                    <ProductTopCarousel items={itemTopList}/>
                </div>
            </div>
        </div>
    )
}

export default ProductTopList
