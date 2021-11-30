import React from 'react';

const Images = ({ img, }) => {
    return (
        <div className="carousel-item-b swiper-slide">
            <img src={img} alt="" />
        </div>
    );
}

export default Images;