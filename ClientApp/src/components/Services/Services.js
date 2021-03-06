import React from 'react';
import { Service } from './Service';

function Services() {

    const services = [
        {
            id: '1',
            title: 'Apartments',
            description: '',
            icon: 'bi bi-building',
            url: '/properties/apartment',
        },
        {
            id: '2',
            title: 'Houses',
            description: '',
            icon: 'bi bi-house',
            url: '/properties/house',
        },
        {
            id: '3',
            title: 'Huts',
            description: '',
            icon: 'bi bi-shop',
            url: '/properties/hut',
        },
    ]

    return (
        <section className="section-services section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Categories</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        services.map(x => <Service key={x.id} service={x} />)
                    }
                </div>
            </div>
        </section>
    )
}

export { Services };