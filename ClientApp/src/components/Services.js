import React from 'react';
import { Service } from './Service';

function Services() {

    return (
        <section className="section-services section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Our Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <Service />
                    <Service />
                    <Service />

                </div>
            </div>
        </section>
    )
}

export { Services };