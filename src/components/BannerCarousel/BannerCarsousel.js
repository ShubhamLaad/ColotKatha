import React from 'react';
import Slider from "react-slick";
import CAROUSEL from '../../json/CAROUSEL.json'

export default function BannerCarousel() {
    return (
        <Slider
            autoplay={true}
            swipe
            draggable={true}
            infinite
            speed={500}
            fade
            autoplaySpeed={2000}
            touchMove
        >
            {CAROUSEL.map(img => <div key={img.heading}>
                <div className="img-bg" style={{ backgroundImage: `url(${img.imgUrl})` }}></div>
            </div>)}

        </Slider>
    );
}
