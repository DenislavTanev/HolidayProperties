import React from 'react';
import { Link } from 'react-router-dom';

function IntroItem({ introItem, }) {

    return (
        <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: introItem.bgImg }}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="intro-body">
                                    <h1 className="intro-title mb-4 ">
                                        <span className="color-b">{introItem.titleSpan} </span> {introItem.titleH1}
                                        <br /> {introItem.titleBr}
                                            </h1>
                                    <p className="intro-subtitle intro-price">
                                        <Link to={introItem.btnLink}><span className="price-a">{introItem.btnInfo}</span></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export { IntroItem };