import React from 'react';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'

function NavigationBar() {

  return (
    <Navbar expand="lg" variant="light" id='mainNav'>
      <Container>
        <Navbar.Brand className="brand" href="/">Dog Plaza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link href="/signin">Login</Nav.Link>
            <Nav.Link href="/signup">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar