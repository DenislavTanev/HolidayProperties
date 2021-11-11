import React from 'react';

function Service() {
    return (
        <div className="col-md-4">
            <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                    <div className="card-box-ico">
                        <span className="bi bi-cart"></span>
                    </div>
                    <div className="card-title-c align-self-center">
                        <h2 className="title-c">Lifestyle</h2>
                    </div>
                </div>
                <div className="card-body-c">
                    <p className="content-c">
                        Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                        convallis a pellentesque
                        nec, egestas non nisi.
                    </p>
                </div>
                <div className="card-footer-c">
                    <a href="#" className="link-c link-icon">Read more
                             <span className="bi bi-chevron-right"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export { Service };