import { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Gallery from "./Gallery";

const URL = "http://www.omdbapi.com/?apikey=71c0d48&s=";
const searchParam = "&type=movie&t";

class SearchMovie extends Component {
  state = {
    title: "",
    hasSubmitted: false
  };

  handleFieldChange = value => {
    this.setState({ title: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.title);
    this.setState({ hasSubmitted: true });

    fetch(`${URL + this.state.title + searchParam}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data");
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container fluid className="mb-3">
        <Form className="mt-5 d-flex" onSubmit={event => this.handleSubmit(event)}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Search" onChange={event => this.handleFieldChange(event.target.value)} />
          </Form.Group>
          <Button type="submit" variant="secondary" className="align-self-start ms-3">
            Search
          </Button>
        </Form>
        {this.state.hasSubmitted && <Gallery query={this.state.title} />}
      </Container>
    );
  }
}

export default SearchMovie;
