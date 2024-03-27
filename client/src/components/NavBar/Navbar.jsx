import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        {/* <Navbar bg="primary" data-bs-theme="dark"> */}
        {/* <Navbar bg="light" data-bs-theme="light"> */}
        <Container>
          <Navbar.Brand href="#home">VD-ROOM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              anyyyyyyy
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              cart
            </Nav.Link>
            <Nav.Link as={Link} to="/socialfeed">
              Social Feed
            </Nav.Link>
          </Nav>

          <Button variant="outline-primary" className="ml-auto">
            User Account
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
