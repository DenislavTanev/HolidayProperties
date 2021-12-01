import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as propertyService from '../../Services/propertyService';
import authService from '../api-authorization/AuthorizeService';
import SingleProperty from './SingleProperty';

const Profile = () => {

    const [properties, SetProperties] = useState([]);

    const [userId, SetUserId] = useState([]);

    useEffect(() => {
        authService.getUser()
            .then(res => {
                SetUserId(res.sub);
            })

        propertyService.getByUser(userId)
            .then(res => {
                SetProperties(res);
            });
    }, [userId]);

    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">My Properties</h1>
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
                            ? properties.map(x => <SingleProperty key={x.id} property={x} userId={userId} />)
                            : <h3>No properties yet</h3>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;