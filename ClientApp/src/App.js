import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/Preloaded Components/FetchData';
import { Counter } from './components/Preloaded Components/Counter';
import { Contact } from './components/Contact';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import PropertiesList from './components/PropertiesList/PropertiesList';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';

import * as main from './main.js';

export default class App extends Component {
    static displayName = App.name;

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "assets/js/main.js";

        //script.innerHTML = main;

        document.body.appendChild(script);
    }

    render() {
        return (
            <>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/contact' component={Contact} />
                    <Route exact path='/properties' component={PropertiesList} />
                    <Route path='/properties/getbyid/:propertyId' component={PropertyDetails} />
                    <AuthorizeRoute path='/fetch-data' component={FetchData} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Layout>
            </>
        );
    }
}