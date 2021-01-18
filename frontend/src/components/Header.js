import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand className="logo" href="/">
            <img src={logo} width="50" height="50" alt="logo" />
            {/* KhaShop */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="ml-1">Cart</span>
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>
                <span className="ml-1">Sign in</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
