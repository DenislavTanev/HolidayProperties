import React from 'react';
import { Link } from 'react-router-dom';

function Service({ service, }) {
    return (
        <div className="col-md-4">
            <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                    <div className="card-box-ico">
                        <span className={ service.icon }></span>
                    </div>
                    <div className="card-title-c align-self-center">
                        <h2 className="title-c">{ service.title }</h2>
                    </div>
                </div>
                <div className="card-body-c">
                    <p className="content-c">
                        { service.description }
                    </p>
                </div>
                <div className="card-footer-c">
                    <Link to={service.url} className="link-c link-icon">See more
                             <span className="bi bi-chevron-right"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { Service };