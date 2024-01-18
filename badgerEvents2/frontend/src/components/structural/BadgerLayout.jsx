import React, { useContext, useState, useEffect } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet, useNavigate } from "react-router-dom"

import crest from '../../assets/uw-crest.svg'

function BadgerLayout(props) {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as ={Link} to="/">
                        <img
                            alt="Badger Logo"
                            src={crest}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        BadgerEvent
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as ={Link} to ="/">Home</Nav.Link>
                        <Nav.Link as ={Link} to ="login">Login</Nav.Link>
                        <Nav.Link as ={Link} to ="chat">Chat</Nav.Link>
                        <Nav.Link as ={Link} to ="register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
            <div style ={{margin:'1rem'}}>
            </div>
        </div>
    )

}

export default BadgerLayout