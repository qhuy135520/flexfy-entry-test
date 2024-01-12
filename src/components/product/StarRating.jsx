import React from 'react'
import './star-rating.css'

const Star = ({ totalStars, starSelected }) => {
    const numbers = Array.from({ length: totalStars }, (_, index) => index + 1);

    return (
        <>
            {

                numbers.map((number,index) => (
                    <div key={index} className={`star ${number <= starSelected ? 'selected' : ''}`} >
                        ★
                    </div>
                ))
            }
        </>
    )
};

const StarRating = ({ totalStars, starSelected, views }) => {


    return (
        <div>
            <Star totalStars={totalStars} starSelected={starSelected} />
            <span  className='product-views'>{views} Reviews</span>
        </div>
    );
};

export default StarRating
