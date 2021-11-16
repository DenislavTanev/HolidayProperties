import React from 'react';

function Footer() {
    return (
        <>
            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">HolidayProperties</h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a">
                                        Our mission is simple.We want to make it easier for you to find the best place that suits your needs.
                                        Either you want to party with your friends or plan holidays with your family.We have the best place for you. 
                                    </p>
                                </div>
                                <div className="w-footer-a">
                                    <ul className="list-unstyled">
                                        <li className="color-a">
                                            <span className="color-text-a">Phone .</span> +54 356 945234
                                        </li>
                                        <li className="color-a">
                                            <span className="color-text-a">Email .</span> contact@example.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">Properties</h3>
                                </div>
                                <div className="w-body-a">
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <a href="#">Huts</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <a href="#">Houses</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <a href="#">Apartments</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 section-md-t3">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">Company</h3>
                                </div>
                                <div className="w-body-a">
                                    <ul className="list-unstyled">
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <a href="#">About</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <a href="/contact">Contact Us</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <a href="#">Terms of Service</a>
                                        </li>
                                        <li className="item-list-a">
                                            <i className="bi bi-chevron-right"></i> <a href="#">Cookie Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright
                                    <span className="color-a">HolidayProperties</span> All Rights Reserved.
                                </p>
                            </div>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export { Footer };