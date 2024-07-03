/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
const URL = "http://www.omdbapi.com/?apikey=71c0d48&i=";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();
  console.log("params", params.id);

  useEffect(() => {
    fetch(`${URL + params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get the data - Fetch MovieDetails");
        }
      })
      .then(film => {
        setMovie(film);
      });
  }, []);

  if (movie) {
    return (
      <Container>
        <Row>
          <div className="col-md-4 px-3 vh-100">
            <img src={movie.Poster} alt={movie.Title} className="w-100" />
          </div>
          <div className="col-md-8 col-md-8 d-flex flex-column">
            <h2 className="pb-3">{movie.Title}</h2>
            <small className="mb-2">
              {movie.Year} | {movie.Runtime} | {movie.Country}
            </small>
            <small className="mb-3">
              <span className="text-secondary">Cast:</span> {movie.Actors}{" "}
            </small>
            <small className="mb-3">
              <span className="text-secondary">Genres:</span> {movie.Genre}{" "}
            </small>
            <p>{movie.Plot}</p>
          </div>
        </Row>
      </Container>
    );
  }
};

export default MovieDetails;
