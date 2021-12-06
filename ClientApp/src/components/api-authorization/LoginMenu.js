import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';

export class LoginMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null,
            userId: null,
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()]);
        this.setState({
            isAuthenticated,
            userName: user && user.name,
            userId: user && user.sub,
        });
    }

    render() {
        const { isAuthenticated, userName, userId } = this.state;
        if (!isAuthenticated) {
            const registerPath = `${ApplicationPaths.Register}`;
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(registerPath, loginPath);
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
            return this.authenticatedView(userName, userId, profilePath, logoutPath);
        }
    }

    authenticatedView(userName, userId, profilePath, logoutPath) {
        return (
            <div className="dropdown">
                <img className="rounded-circle" role="button" id="dropdownMenuButton" style={{ height: '30px', width: '30px', }} src="https://hook.finance/sites/default/files/user.png"
                    alt='..' data-holder-rendered="true" data-bs-toggle="dropdown" aria-expanded="false" />

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link className="dropdown-item" to={`/profile/${userId}`}>Profile</Link></li>
                    <li><Link className="dropdown-item" to="/create">Add Property</Link></li>
                    <li><Link className="dropdown-item" to={profilePath}>Settings</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={logoutPath}>Logout</Link></li>
                </ul>
            </div>
        );

    }

    anonymousView(registerPath, loginPath) {
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={registerPath}>Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={loginPath}>Login</NavLink>
            </NavItem>
        </Fragment>);
    }
}
