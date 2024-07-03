import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavBar() {
  return (
    <Navbar expand="lg" className="" style={{ backgroundColor: "#141414" }}>
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png" alt="logo netflix" width="120px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="">
              Home
            </Nav.Link>
            <Nav.Link href="#Home" className="">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#Home" className="">
              Movies
            </Nav.Link>
            <Nav.Link href="#Home" className="">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#Home" className="">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="#home">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#home" className="">
              KIDS
            </Nav.Link>
            <Nav.Link href="#home" className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" className="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#home">
              <Dropdown>
                <Dropdown.Toggle variant="" className="">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" width="30px" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                  <Dropdown.Item>Account</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
