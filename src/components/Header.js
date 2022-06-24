import { Link } from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (

        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand to="/" as={Link}>EcryptedNotes<img src='/main-logo.png' alt='main-logo'/></Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link to="/create" as={Link}>Create</Nav.Link>
          <Nav.Link to="/note" as={Link}>Search</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
    );
}

export default Header;