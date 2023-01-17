import React from 'react';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'
import AuthService from '../services/auth.service';
import { HouseHeart } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom'

function NavigationBar() {

  const currentuser = AuthService.getCurrentUser()
  const navigate = useNavigate();

  function handleLogOut(){
    AuthService.logout()
    navigate('/')
    window.location.reload();
  }

  return (
    <Navbar expand="lg" variant="light" id='mainNav'>
      <Container>
        <Navbar.Brand className="brand" href="/"><HouseHeart style={{ width: "50px", height: "50px" }} className="mb-2" />D<sup>og</sup> P<sub>laza</sub></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {currentuser ? <>
              <Nav.Link href="/account">Account</Nav.Link>
              <Nav.Link href="#" onClick={handleLogOut}>Log Out</Nav.Link>
            </>: 
            <>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signup">Register</Nav.Link>
            </>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar