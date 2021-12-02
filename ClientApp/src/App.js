import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/Preloaded Components/FetchData';
import { Counter } from './components/Preloaded Components/Counter';
import { Contact, AboutUs, PrivacyPolicy, Terms } from './components/Company/';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import PropertiesList from './components/PropertiesList/PropertiesList';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import Create from './components/PropertyCreate/Create';
import Profile from './components/Profile/MyProperties';
import Edit from './components/PropertyEdit/Edit';

const App = () => {

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "assets/js/main.js";
        script.async = true;

        document.body.appendChild(script);

    }, []);

    return (
        <>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <AuthorizeRoute path='/create' component={Create} />
                <AuthorizeRoute path='/edit/:propertyId' component={Edit} />
                <Route path='/contact' component={Contact} />
                <Route path='/aboutUs' component={AboutUs} />
                <Route path='/privacy' component={PrivacyPolicy} />
                <AuthorizeRoute path='/profile/:userId' component={Profile} />
                <Route path='/terms' component={Terms} />
                <Route path='/properties/:type' component={PropertiesList} />
                <Route path='/property/:propertyId' component={PropertyDetails} />
                <AuthorizeRoute path='/fetch-data' component={FetchData} />
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
            </Layout>
        </>
    );

}

export default App;