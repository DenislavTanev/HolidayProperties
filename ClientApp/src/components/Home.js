import React from 'react';
import { IntroSwiper } from './IntroSwiper';
import { Services } from './Services';
import { LatestProperties } from './LatestProperties';
import { Testimonials } from './Testimonials';

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
