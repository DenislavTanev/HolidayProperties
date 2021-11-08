import React from 'react';
import { IntroItem } from "./IntroItem";

function IntroSwiper() {
    return (
        <div className="intro intro-carousel swiper position-relative">

            <div className="swiper-wrapper">

                <IntroItem />
                <IntroItem />
                <IntroItem />

                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export { IntroSwiper };
