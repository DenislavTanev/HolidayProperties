import React from 'react';
import { IntroItem } from "./IntroItem";

function IntroSwiper() {

    const intros = [
        {
            id: '1',
            bgImg: 'url(assets/img/winter1.jpg)',
            titleSpan: 'Add',
            titleH1: 'your',
            titleBr: 'property.',
            btnInfo: 'Add',
            btnLink: '/create',
        },
        {
            id: '2',
            bgImg: 'url(assets/img/winter2.jpg)',
            titleSpan: 'See',
            titleH1: 'our',
            titleBr: 'winter DEALS.',
            btnInfo: 'See More',
            btnLink: '/properties/all',
        },
        {
            id: '3',
            bgImg: 'url(assets/img/introAll.jpg)',
            titleSpan: 'Check',
            titleH1: 'most',
            titleBr: 'liked properties.',
            btnInfo: 'See All',
            btnLink: '/properties/all',
        },
    ]

    return (
        <div className="intro intro-carousel swiper position-relative">

            <div className="swiper-wrapper">
                {
                    intros.length > 0 
                        ? intros.map(x => <IntroItem key={x.id} introItem={x} />)
                        : <h1>No Intros</h1>
                }
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export { IntroSwiper };
