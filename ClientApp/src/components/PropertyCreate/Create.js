import React from 'react';
import { useHistory } from 'react-router-dom';
import * as propertyService from '../../Services/propertyService';

import './Create.css';

const Create = () => {

    const history = useHistory();

    const onPropertyCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let address = formData.get('address');
        let price = formData.get('price');
        //let images = formData.get('images');
        let type = formData.get('type');

        propertyService.create({
            name,
            description,
            address,
            price,
            type,
        })
            .then(result => {
                history.push('/');
            })
    }

    return (
        <section id="create-page" className="create-page">
            <form id="create-form" onSubmit={onPropertyCreate} method="POST">
                <fieldset>
                    <legend>Add new Property</legend>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="address">Address</label>
                        <span className="input">
                            <textarea name="address" id="address" placeholder="Address"></textarea>
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <span className="input">
                            <input type='number' name="price" id="price" placeholder="Price" />
                        </span>
                    </div>
                    <div className="field">
                        <label htmlFor="images">Images</label>
                        <span className="input">
                            <input type="file" name="images" id="images" placeholder="Images" multiple />
                        </span>
                    </div>

                    <div className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option key='hut' value='Hut'>Hut</option>
                                <option key='house' value='House'>House</option>
                                <option key='apartment' value='Apartment'>Apartment</option>
                            </select>
                        </span>
                    </div>
                    <input className="button submit" type="submit" value="Add Property" />
                </fieldset>
            </form>
        </section>
        );
}

export default Create;