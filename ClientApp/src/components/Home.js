import React from 'react';
import { IntroSwiper } from './IntroSwiper';
import { Services } from './Services';
import { LatestProperties } from './LatestProperties';

function Home() {

    return (
        <>
            <IntroSwiper />

            <Services />

            <LatestProperties />
        </>
    );
};

export { Home };
