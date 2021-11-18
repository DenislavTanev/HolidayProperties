import React, { useEffect, useState } from 'react';
import ListProperty from './ListProperty';
import * as propertyService from '../../Services/propertyService';

const PropertiesList = () => {

    const [properties, SetProperties] = useState([]);

    useEffect(() => {
        propertyService.getAll()
            .then(result => {
                SetProperties(result);
            })
    }, []);

    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Our Amazing Properties</h1>
                                <span className="color-text-a">Grid Properties</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Properties Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="property-grid grid">
                <div className="container">
                    <div className="row">
                        {properties.length > 0
                            ? properties.map(x => <ListProperty key={x.id} property={x} />)
                            : <h3>No properties yet</h3>
                        }
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#">
                                            <span className="bi bi-chevron-left"></span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item next">
                                        <a className="page-link" href="#">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );


};

export default PropertiesList;