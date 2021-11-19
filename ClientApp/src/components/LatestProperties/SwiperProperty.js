import React from 'react';
import { Link } from 'react-router-dom';

const SwiperProperty = ({ property, }) => {

    return (
        <div className="carousel-item-b swiper-slide">
            <div className="card-box-a card-shadow">
                <div className="img-box-a">
                    <img src="assets/img/property-6.jpg" alt="" className="img-a img-fluid" />
                </div>
                <div className="card-overlay">
                    <div className="card-overlay-a-content">
                        <div className="card-header-a">
                            <h2 className="card-title-a">
                                <a href="property-single.html"> {property.name}
                                    <br />{property.type}</a>
                            </h2>
                        </div>
                        <div className="card-body-a">
                            <div className="price-box d-flex">
                                <span className="price-a">rent | $ {property.price}</span>
                            </div>
                            <Link to={`/properties/getbyid/${property.id}`} className="link-a">Click here to view
                                            <span className="bi bi-chevron-right"></span>
                            </Link>
                        </div>
                        <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                                <li>
                                    <h4 className="card-info-title">Area</h4>
                                    <span>340m
                                                    <sup>2</sup>
                                    </span>
                                </li>
                                <li>
                                    <h4 className="card-info-title">Beds</h4>
                                    <span>2</span>
                                </li>
                                <li>
                                    <h4 className="card-info-title">Baths</h4>
                                    <span>4</span>
                                </li>
                                <li>
                                    <h4 className="card-info-title">Garages</h4>
                                    <span>1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperProperty;
