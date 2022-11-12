import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ITCNavbar() {
  return (
    <Navbar bg="primary" expand="md" variant="dark" sticky="top" className="py-3">
      <Container fluid>
        <Navbar.Brand href="#home" className="is-size-7">
          Christopher Anderson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="is-size-8 mx-2 text-white">
              Coder
            </Nav.Link>
            <Nav.Link href="#writer" className="is-size-8 mx-2 text-white">
              Writer
            </Nav.Link>
            <Nav.Link href="#actor" className="is-size-8 ms-2 text-white">
              Actor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ITCNavbar;
