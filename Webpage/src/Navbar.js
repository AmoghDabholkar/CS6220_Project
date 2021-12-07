import { Container, Navbar, Nav } from 'react-bootstrap';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" mb={5} >
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/demo">Demo</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
