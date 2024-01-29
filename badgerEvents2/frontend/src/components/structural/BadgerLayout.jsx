import React, { useContext, useState, useEffect } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet, useNavigate } from "react-router-dom"

import crest from '../../assets/uw-crest.svg'

function BadgerLayout(props) {
    const navigate = useNavigate();


    const changeAuth = () => {
        alert("You have been logged out");
        navigate('/');
        props.changeAuth();
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        BadgerEvent
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {!props.user ? (
                            <>
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                                <Nav.Link as={Link} to="register">Register</Nav.Link>
                            </>
                        ) : (
                            <>
                            <Nav.Link as={Link} to="events-List">Event-Lists</Nav.Link>
                            <Nav.Link as={Link} to="chat">My Chat</Nav.Link>
                            <Nav.Link onClick={changeAuth}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
            <div style={{ margin: '1rem' }}>
            </div>
        </div>
    )

}

export default BadgerLayout