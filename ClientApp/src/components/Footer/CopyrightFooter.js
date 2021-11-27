import React from 'react';

const CopyrightFooter = () => {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="socials-a">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com">
                                        <i className="bi bi-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com">
                                        <i className="bi bi-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com">
                                        <i className="bi bi-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/feed/">
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
    );
}

export default CopyrightFooter;