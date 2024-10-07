// App.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Bootstrap() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-info p-5 text-center">
        <Container>
          <h1>Welcome to My Site</h1>
          <p>This is a simple hero section to catch the visitor's attention.</p>
          <Button variant="primary">Learn More</Button>
        </Container>
      </div>

      {/* Content Section */}
      <Container className="my-5">
        <h2>About Us</h2>
        <p>
          This is a simple demo of a Bootstrap template in React. You can use it as a starting point for your own website or project.
        </p>
      </Container>
    </div>
  );
}

export default Bootstrap;
