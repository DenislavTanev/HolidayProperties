import React, { useEffect, useState } from 'react';
import { useHistory, } from 'react-router-dom';
import authService from '../api-authorization/AuthorizeService';

import './Create.css';

const Create = () => {
    const [userId, SetUserId] = useState([]);

    useEffect(() => {
        authService.getUser()
            .then(res => {
                SetUserId(res.sub);
            })
    }, []);

    const history = useHistory();

    const onPropertyCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        console.log(formData);

        fetch('properties', {
            method: 'POST',
            body: formData
        })
            .then(res => {
                history.push(`/profile/${userId}`);
            })

        //let name = formData.get('name');
        //let description = formData.get('description');
        //let address = formData.get('address');
        //let price = formData.get('price');
        //let images = formData.get('images');
        //let type = formData.get('type');
        //
        //propertyService.create({
        //    name,
        //    description,
        //    address,
        //    price,
        //    type,
        //    // images,
        //})
        //    .then(result => {
        //        history.push('/');
        //    })
    }

    return (
        <section id="create-page" className="create-page">
            <form id="create-form" onSubmit={onPropertyCreate} method="POST">
                <fieldset>
                    <div className='field form-el'>
                        Add new Property
                    </div>
                    <div className="field form-el">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="address">Address</label>
                        <span className="input">
                            <textarea name="address" id="address" placeholder="Address"></textarea>
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="price">Price</label>
                        <span className="input">
                            <input type='number' name="price" id="price" placeholder="Price" />
                        </span>
                    </div>

                    <div className="field form-el">
                        <label htmlFor="area">Area</label>
                        <span className="input">
                            <input type='number' name="area" id="area" placeholder="Area" />
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="beds">Beds</label>
                        <span className="input">
                            <input type='number' name="beds" id="beds" placeholder="Beds" />
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="capacity">Capacity</label>
                        <span className="input">
                            <input type='number' name="capacity" id="capacity" placeholder="Capacity" />
                        </span>
                    </div>
                    <div className="field form-el">
                        <label htmlFor="garages">Garages</label>
                        <span className="input">
                            <input type='number' name="garages" id="garages" placeholder="Garages" />
                        </span>
                    </div>

                    <div className="field form-el">
                        <label htmlFor="images">Images</label>
                        <span className="input">
                            <input type="file" name="images" id="images" placeholder="Images" multiple />
                        </span>
                    </div>

                    <div className="field form-el">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option key='hut' value='Hut'>Hut</option>
                                <option key='house' value='House'>House</option>
                                <option key='apartment' value='Apartment'>Apartment</option>
                            </select>
                        </span>
                    </div>
                    <div className='field form-el'>
                        <input type='text' name='ownerId' id='ownerId' defaultValue={userId} hidden />
                    </div>
                    <div className='field form-el'>
                        <input className="button submit" type="submit" value="Add Property" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default Create;