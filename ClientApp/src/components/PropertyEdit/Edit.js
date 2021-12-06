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
            email: '',
            phoneNumber: '',
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
                history.push(`/profile/${userId}`);
            })
    }

    return (
        <section id="create-page" className="create-page">
            <form id="create-form" onSubmit={onPropertyEdit} method="PUT">
                <fieldset>
                    <div className='field form-el form-title'>
                        Edit<span className="color-b">Property</span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" value={property.name} onChange={handleChange} />
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea className='textarea' name="description" id="description" value={property.description} onChange={handleChange} ></textarea>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="address">Address</label>
                        <span className="input">
                            <textarea className='textarea' name="address" id="address" value={property.address} onChange={handleChange}></textarea>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="price">Price</label>
                        <span className="input">
                            <input type='number' name="price" id="price" value={property.price} onChange={handleChange}/>
                        </span>
                    </div>

                    <div className="field form-el">
                        <label htmlFor="area">Area</label>
                        <span className="input">
                            <input type='number' name="area" id="area" value={property.area} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="beds">Beds</label>
                        <span className="input">
                            <input type='number' name="beds" id="beds" value={property.beds} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="capacity">Capacity</label>
                        <span className="input">
                            <input type='number' name="capacity" id="capacity" value={property.capacity} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="garages">Garages</label>
                        <span className="input">
                            <input type='number' name="garages" id="garages" value={property.garages} onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" value={property.email} onChange={handleChange} />
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="phoneNumber">PhoneNumber</label>
                        <span className="input">
                            <input type="text" name="phoneNumber" id="phoneNumber" value={property.phoneNumber} onChange={handleChange} />
                        </span>
                    </div>
                    <div className='field form-el'>
                        <input type='text' name='ownerId' id='ownerId' defaultValue={userId} hidden />
                    </div>
                    <div className='field form-el'>
                        <input type='text' name='Id' id='Id' defaultValue={property.id} hidden />
                    </div>
                    <div className='field form-el'>
                        <input className="button submit btns" type="submit" value="Update" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default Edit;