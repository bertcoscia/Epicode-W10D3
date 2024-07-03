/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Alert, Badge, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const urlMovie = "http://www.omdbapi.com/?apikey=71c0d48&i=";
const urlComments = "https://striveschool-api.herokuapp.com/api/comments/";
const authComments = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState(null);

  const params = useParams();

  const fetchMovie = () => {
    fetch(`${urlMovie + params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - fetchMovie");
        }
      })
      .then(film => {
        setMovie(film);
      });
  };

  const fetchComments = () => {
    fetch(`${urlComments + params.id}`, {
      headers: {
        Authorization: authComments
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - fetchComments");
        }
      })
      .then(comments => {
        setComments(comments);
      });
  };

  useEffect(() => {
    fetchMovie();
    fetchComments();
  }, []);

  if (movie) {
    return (
      <Container className="vh-100">
        <Row className="mb-5">
          <div className="col-md-4 px-3">
            <img src={movie.Poster} alt={movie.Title} className="w-100" />
          </div>
          <div className="col-md-8 col-md-8 d-flex flex-column">
            <h2 className="pb-3">{movie.Title}</h2>
            <small className="mb-2">
              {movie.Year} | {movie.Runtime} | {movie.Country}
            </small>
            <small className="mb-3">
              <span className="text-secondary">Director:</span> {movie.Director}
            </small>
            <small className="mb-3">
              <span className="text-secondary">Cast:</span> {movie.Actors}
            </small>
            <small className="mb-3">
              <span className="text-secondary">Genres:</span> {movie.Genre}
            </small>
            <p>{movie.Plot}</p>
            {comments && comments.length > 0 ? (
              <div className="d-flex flex-column mt-5">
                <h3>Reviews</h3>
                <ListGroup>
                  {comments.map(review => (
                    <ListGroup.Item key={review._id} className="bg-transparent text-bg-dark w-50">
                      <small className="text-secondary">{review.author}</small>
                      <div className="d-flex align-items-center justify-content-between">
                        <h4>{review.comment}</h4>
                        <Badge className="" bg={review.rate < 3 ? "danger" : review.rate > 4 ? "success" : "secondary"}>
                          {review.rate}
                        </Badge>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <Alert variant="warning" className="text-center align-self-center mt-5">
                There are no comments
              </Alert>
            )}
          </div>
        </Row>
      </Container>
    );
  }
};

export default MovieDetails;
