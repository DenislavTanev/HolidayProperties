import React, { useEffect } from 'react';
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
                <Route path='/contact' component={Contact} />
                <Route exact path='/properties' component={PropertiesList} />
                <Route path='/properties/:propertyId' component={PropertyDetails} />
                <AuthorizeRoute path='/fetch-data' component={FetchData} />
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
            </Layout>
        </>
    );

}

export default App;