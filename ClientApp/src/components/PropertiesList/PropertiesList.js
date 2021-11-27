import React, { useEffect, useState } from 'react';
import ListProperty from './ListProperty';
import * as propertyService from '../../Services/propertyService';
import { Link } from 'react-router-dom';
import TypeSelector from './TypeSelector';

const PropertiesList = ({ match, }) => {

    const [properties, SetProperties] = useState([]);

    useEffect(() => {
        propertyService.getAll(match.params.type)
            .then(result => {
                SetProperties(result);
            });
    }, [match.params.type]);

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
                                        <Link to="/">Home</Link>
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
                        <TypeSelector />

                        {properties.length > 0
                            ? properties.map(x => <ListProperty key={x.id} property={x} />)
                            : <h3>No properties yet</h3>
                        }
                    </div>
                </div>
            </section>
        </>
    );


};

export default PropertiesList;