import React, { useEffect, useState } from 'react';
import { useHistory, } from 'react-router-dom';
import authService from '../api-authorization/AuthorizeService';
import * as propertyService from '../../Services/propertyService';

const Edit = ( { match, } ) => {
    const [userId, SetUserId] = useState([]);

    const [property, setProperty] = useState(
        {
            id: '',
            name: '',
            description: '',
            price: '',
            address: '',
            area: '',
            capacity: '',
            garages: '',
            beds: '',
        });

    const handleChange = e => {
        const { name, value } = e.target;
        setProperty(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(property)
    };

    useEffect(() => {
        authService.getUser()
            .then(res => {
                SetUserId(res.sub);
            });

        propertyService.getOne(match.params.propertyId)
            .then(res => {
                setProperty(res);
            })
    }, [match.params.propertyId,]);

    const history = useHistory();

    const onPropertyEdit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        console.log(formData);

        fetch(`properties`, {
            method: 'PUT',
            body: formData
        })
            .then(res => {
                history.push('/profile');
            })
    }

    return (
        <section id="create-page" className="create-page">
            <form id="create-form" onSubmit={onPropertyEdit} method="PUT">
                <fieldset>
                    <legend>Edit Property</legend>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" value={property.name} onChange={handleChange} />
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" value={property.description} onChange={handleChange} ></textarea>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="address">Address</label>
                        <span className="input">
                            <textarea name="address" id="address" value={property.address} onChange={handleChange}></textarea>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <span className="input">
                            <input type='number' name="price" id="price" value={property.price} onChange={handleChange}/>
                        </span>
                    </div>

                    <div className="field">
                        <label htmlFor="area">Area</label>
                        <span className="input">
                            <input type='number' name="area" id="area" value={property.area} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="beds">Beds</label>
                        <span className="input">
                            <input type='number' name="beds" id="beds" value={property.beds} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="capacity">Capacity</label>
                        <span className="input">
                            <input type='number' name="capacity" id="capacity" value={property.capacity} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="garages">Garages</label>
                        <span className="input">
                            <input type='number' name="garages" id="garages" value={property.garages} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className='field'>
                        <input type='text' name='ownerId' id='ownerId' defaultValue={userId} hidden />
                    </div>
                    <div className='field'>
                        <input type='text' name='Id' id='Id' defaultValue={property.id} hidden />
                    </div>
                    <input className="button submit" type="submit" value="Add Property" />
                </fieldset>
            </form>
        </section>
    );
}

export default Edit;