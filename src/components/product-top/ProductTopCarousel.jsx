import React from 'react'
import Carousel from 'react-multi-carousel'
import ProductTopCard from './ProductTopCard'
import './product-top-card.css'

const ProductTopCarousel = ({ items }) => {
    const itemTopCategories = items
    return (
        <Carousel
            className='product-carousel'
            additionalTransfrom={0}
            arrows
            centerMode={false}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1550
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },

                medium: {
                    breakpoint: {
                        max: 1550,
                        min: 1300
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1300,
                        min: 1000
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                },
                xs: {
                    breakpoint: {
                        max: 1000,
                        min: 768
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
                ,
                mobile: {
                    breakpoint: {
                        max: 768,
                        min: 460
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
                ,
                xxs: {
                    breakpoint: {
                        max: 460,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },

            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {itemTopCategories.map((item, index) => (
                <ProductTopCard srcImage={item.srcImage} title={item.title} key={index} />
            ))}


        </Carousel >
    )
}

export default ProductTopCarousel
