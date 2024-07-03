import { Nav, Navbar } from "react-bootstrap";

const AccountNav = () => {
  return (
    <header>
      <Nav>
        <Navbar.Brand href="#home">
          <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png" alt="logo netflix" width="120px" />
        </Navbar.Brand>
      </Nav>
    </header>
  );
};

export default AccountNav;
