import React from 'react';

function Testimonials() {
    return (
        <section className="section-testimonials section-t8 nav-arrow-a">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Testimonials</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="testimonial-carousel" className="swiper">
                    <div className="swiper-wrapper">

                        <div className="carousel-item-a swiper-slide">
                            <div className="testimonials-box">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-img">
                                            <img src="assets/img/testimonial-1.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-ico">
                                            <i className="bi bi-chat-quote-fill"></i>
                                        </div>
                                        <div className="testimonials-content">
                                            <p className="testimonial-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                debitis hic ber quibusdam
                                                voluptatibus officia expedita corpori.
                                            </p>
                                        </div>
                                        <div className="testimonial-author-box">
                                            <img src="assets/img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar" />
                                            <h5 className="testimonial-author">Albert & Erika</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item-a swiper-slide">
                            <div className="testimonials-box">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-img">
                                            <img src="assets/img/testimonial-2.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-ico">
                                            <i className="bi bi-chat-quote-fill"></i>
                                        </div>
                                        <div className="testimonials-content">
                                            <p className="testimonial-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                debitis hic ber quibusdam
                                                voluptatibus officia expedita corpori.
                                            </p>
                                        </div>
                                        <div className="testimonial-author-box">
                                            <img src="assets/img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar" />
                                            <h5 className="testimonial-author">Pablo & Emma</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="testimonial-carousel-pagination carousel-pagination"></div>

            </div>
        </section>
    );
};

export { Testimonials };