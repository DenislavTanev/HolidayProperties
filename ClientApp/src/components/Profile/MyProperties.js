import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as propertyService from '../../Services/propertyService';
import SingleProperty from './SingleProperty';

const Profile = ({ match, }) => {

    const [properties, SetProperties] = useState([]);

    useEffect(() => {
        propertyService.getByUser(match.params.userId)
            .then(res => {
                SetProperties(res);
            });
    }, [match.params.userId]);

    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">My Properties</h1>
                                <span className="color-text-a">Add property <Link to='/create' className='addProp'>+</Link></span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        My Properties
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
                            ? properties.map(x => <SingleProperty key={x.id} property={x} userId={match.params.userId} />)
                            : <h3>No properties yet</h3>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;