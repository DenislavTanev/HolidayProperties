import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as propertyService from '../../Services/propertyService';
import Images from './Image';


const PropertyDetails = ({ match, }) => {
    const imgUrl = "assets/img/slide-2.jpg";

    const [property, setProperty] = useState({});

    useEffect(() => {
        propertyService.getOne(match.params.propertyId)
            .then(res => {
                console.log(res);
                setProperty(res);
            })
    }, [match.params.propertyId]);

    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">{property.name}</h1>
                                <span className="color-text-a">{property.address}</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/properties/all">Properties</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {property.address}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="property-single nav-arrow-b">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div id="property-single-carousel" className="swiper">
                                <div className="swiper-wrapper">
                                    {property.images != null
                                        ? property.images.map(x => <Images key={x} img={x} />)
                                        : <Images img={imgUrl} />, <Images img={imgUrl} />
                                        }
                                </div>
                            </div>
                            <div className="property-single-carousel-pagination carousel-pagination"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">

                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="bi bi-cash">$</span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5 className="title-c">{property.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-summary">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">Quick Summary</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summary-list">
                                            <ul className="list">
                                                <li className="d-flex justify-content-between">
                                                    <strong>Property ID:</strong>
                                                    <span>1134</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Location:</strong>
                                                    <span>Chicago, IL 606543</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Property Type:</strong>
                                                    <span>{property.type}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Area:</strong>
                                                    <span>340m
                                                       <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Beds:</strong>
                                                    <span>4</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Baths:</strong>
                                                    <span>2</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Garage:</strong>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Property Description</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-description">
                                        <p className="description color-text-a no-margin">
                                            {property.description}
                                        </p>
                                    </div>
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Amenities</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amenities-list color-text-a">
                                        <ul className="list-a no-margin">
                                            <li>Balcony</li>
                                            <li>Outdoor Kitchen</li>
                                            <li>Cable Tv</li>
                                            <li>Deck</li>
                                            <li>Tennis Courts</li>
                                            <li>Internet</li>
                                            <li>Parking</li>
                                            <li>Sun Room</li>
                                            <li>Concrete Flooring</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyDetails;