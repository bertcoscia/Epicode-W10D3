import { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const URL = "http://www.omdbapi.com/?apikey=71c0d48&s=";
const searchParam = "&type=movie";

class Gallery extends Component {
  state = {
    results: null,
    isLoading: true
  };

  fetchMovies(query) {
    fetch(`${URL + query + searchParam}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data");
        }
      })
      .then(data => {
        const results = data.Search;
        this.setState({ results: results });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  componentDidMount() {
    this.fetchMovies(this.props.query);
  }

  capitalizeTitle(title) {
    return title
      .split(" ")
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  render() {
    return (
      <Container fluid className="my-3">
        <div className="d-flex">
          <h2 className="mb-3 me-3">{this.capitalizeTitle(this.props.query)}</h2>
          {this.state.isLoading && <Spinner animation="border" variant="light" />}
        </div>
        <Row className="row-cols-2 row-cols-md-3 row-cols-xl-6 justify-content-start gy-1 gy-md-2 gx-1 gx-md-2 overflow-x-auto flex-nowrap py-5">
          {this.state.results &&
            this.state.results.map(result => (
              <Col key={result.imdbID} className="item" xs={5}>
                <img src={result.Poster} alt={result.Title} className="item-img" />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
