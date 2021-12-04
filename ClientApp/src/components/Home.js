import React, { useEffect } from 'react';
import { IntroSwiper } from './IntroSwiper/IntroSwiper';
import { Services } from './Services/Services';
import LatestProperties from './LatestProperties/LatestProperties';
import { Testimonials } from './Testimonials/Testimonials';


function Home() {

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "assets/js/main.js";
        script.async = true;

        document.body.appendChild(script);

    });

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
