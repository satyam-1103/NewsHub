import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>NewsHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link href="/">General</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>
              <Nav.Link href="/science">Science</Nav.Link>
              <Nav.Link href="/entertainment">Entertainment</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/technology">Technology</Nav.Link>
              <Nav.Link href="/health">Health</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
