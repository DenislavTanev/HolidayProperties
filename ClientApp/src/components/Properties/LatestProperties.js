import React from 'react';
import SwiperExtensionProperty from './SwiperExtensionProperty';

const LatestProperties = () => {

    return (
        <section className="section-property section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Latest Properties</h2>
                            </div>
                            <div className="title-link">
                                <a href="property-grid.html">All Property
                                <span className="bi bi-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="property-carousel" className="swiper">
                    <div className="swiper-wrapper">

                        <SwiperExtensionProperty />

                        <SwiperExtensionProperty />

                        <SwiperExtensionProperty />

                        <SwiperExtensionProperty />
                    </div>
                </div>
                <div className="propery-carousel-pagination carousel-pagination"></div>

            </div>
        </section>
    );
};

export default LatestProperties