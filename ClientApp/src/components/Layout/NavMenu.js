import React, { useEffect, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from '../api-authorization/LoginMenu';
import authService from '../api-authorization/AuthorizeService';

function NavMenu() {

    const [userId, SetUserId] = useState([]);

    useEffect(() => {
        authService.getUser()
            .then(res => {
                SetUserId(res.sub);
            })
    }, []);

    return (
        <header>
            <Navbar className="navbar-default navbar-trans navbar-expand-lg fixed-top">
                <Container>
                    <NavbarBrand tag={Link} className="text-brand" to="/">Holiday<span className="color-b">Properties</span></NavbarBrand>
                    <NavbarToggler className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavbarToggler>
                    <Collapse className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark active" to="/">Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to={`/profile/${userId}`}>Profile</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to='/properties/all'>Properties</NavLink>
                            </NavItem>

                            <LoginMenu>
                            </LoginMenu>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export { NavMenu };