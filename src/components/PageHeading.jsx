import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";

class PageHeading extends Component {
  render() {
    return (
      <Container fluid className="d-flex column-gap-3 align-items-center mb-3">
        <h1>Movies</h1>
        <Dropdown>
          <Dropdown.Toggle variant="" id="genreDropdown" className="border border-2 px-4 text-white">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#Home" className="text-white">
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#Home" className="text-white">
              Horror
            </Dropdown.Item>
            <Dropdown.Item href="#Home" className="text-white">
              Fantasy
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div class="d-flex ms-auto">
          <div className="border border-light-subtle py-1 px-2 me-2 heading-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#707070" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div className="border border-light-subtle py-1 px-2 heading-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#707070" className="bi bi-microsoft" viewBox="0 0 16 16">
              <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
            </svg>
          </div>
        </div>
      </Container>
    );
  }
}

export default PageHeading;
