import React from 'react';
import { IntroSwiper } from './IntroSwiper/IntroSwiper';
import { Services } from './Services/Services';
import LatestProperties from './Properties/LatestProperties';
import { Testimonials } from './Testimonials/Testimonials';


function Home() {

    return (
        <>
            <IntroSwiper />

            <Services />

            <LatestProperties />

            <Testimonials />
        </>
    );
};

export { Home };
