import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink}from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="logo"
            src="https://img.freepik.com/free-icon/album_318-928259.jpg?size=338&ext=jpg"
            width="30"
            height="30"
          />
          Photo Gallery App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
            <Nav.Link as={NavLink} to="Contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
