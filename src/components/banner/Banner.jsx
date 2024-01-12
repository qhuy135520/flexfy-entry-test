import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import Banner1 from '../../assets/images/banner-carousel/banner-1.avif'
import './banner.css'
const items = [
    {
        src: 'https://www.thefashionisto.com/wp-content/uploads/2022/12/Business-Casual-Men-Featured.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1 Caption'
    },
    {
        src: 'https://media.burford.co.uk/images/SNY04089.jpg_edit.width-1440_05001m7uKQ0crRoI.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2 Caption'
    },
    {
        src: 'https://hips.hearstapps.com/hmg-prod/images/index-online-658da40f8f5d1.jpg?resize=2048:*',
        altText: 'Slide 3',
        caption: 'Slide 3 Caption'
    }
];
const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            next();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [activeIndex, animating]);

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <img className='carousel-img' src={item.src} alt={item.altText} style={{ objectFit: 'cover' }} />
                <div className="link-shop-sale"><div className="shop-sale">Shop sale</div></div>
            </CarouselItem>
        );
    });

    return (
        <>
            <Carousel className='home-banner' activeIndex={activeIndex} next={next} previous={previous}>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

        </>
    );
}
export default Banner
