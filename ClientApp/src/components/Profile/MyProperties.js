import React, { useEffect, useState } from 'react';
import * as propertyService from '../../Services/propertyService';
import authService from '../api-authorization/AuthorizeService';
import ListProperty from '../PropertiesList/ListProperty';

const Profile = () => {

    const [properties, SetProperties] = useState([]);

    const [userId, SetUserId] = useState([]);

    useEffect(() => {
        authService.getUser()
            .then(res => {
                SetUserId(res.sub);
            })

        console.log(userId)
        propertyService.getByUser(userId)
            .then(res => {
                SetProperties(res);
            });
    }, [userId]);

    return (
        <section className="property-grid grid">
            <div className="container">
                <div className="row">

                    {properties.length > 0
                        ? properties.map(x => <ListProperty key={x.id} property={x} />)
                        : <h3>No properties yet</h3>
                    }
                </div>
            </div>
        </section>
        );
}

export default Profile;