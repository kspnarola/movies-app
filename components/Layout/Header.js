import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">Movies App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </Container>
        </Navbar>
    )
}
