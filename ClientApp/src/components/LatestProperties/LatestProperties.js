import React, { useEffect, useState } from 'react';
import SwiperProperty from './SwiperProperty';
import * as propertyService from '../../Services/propertyService';

const LatestProperties = () => {

    const [properties, SetProperties] = useState([]);

    useEffect(() => {
        propertyService.getLatest()
            .then(result => {
                SetProperties(result);
            })
    }, []);

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
                        {properties.length > 0
                            ? properties.map(x => <SwiperProperty key={x.id} property={x} />)
                            : <h3>No properties yet</h3>
                        }
                    </div>
                </div>
                <div className="propery-carousel-pagination carousel-pagination"></div>

            </div>
        </section>
    );
};

export default LatestProperties