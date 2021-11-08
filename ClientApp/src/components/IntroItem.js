import React from 'react';

function IntroItem() {
    let bgImg = "url(assets/img/slide-1.jpg)";

    return (
        <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: bgImg }}>
            <div className="overlay overlay-a"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="intro-body">
                                    <p className="intro-title-top">Doral, Florida
                                               <br /> 78345
                                            </p>
                                    <h1 className="intro-title mb-4 ">
                                        <span className="color-b">204 </span> Mount
                                               <br /> Olive Road Two
                                            </h1>
                                    <p className="intro-subtitle intro-price">
                                        <a href="index.html"><span className="price-a">rent | $ 12.000</span></a>
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