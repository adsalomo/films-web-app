import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// Servicio
import MovieService from "../services/MovieService";
// Card
import Card from "../components/Card";

function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    handleGetMovies();
  }, []);

  const handleGetMovies = async () => {
    try {
      const response = await MovieService.get();
      setMovies(null);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRenderMovies = () => {
    if (!movies || movies.length === 0) {
      return;
    }

    const columns = 4;
    let rows = Math.floor(movies.length / columns);
    const resto = movies.length % columns;
    if (resto !== 0) {
      rows++;
    }

    return [...Array(rows)].map((row, key) => {
      return (
        <Row key={key}>
          {movies
            .slice(
              key === 0 ? key : key * columns,
              key === 0 ? columns : key * columns + columns
            )
            .map((movie, key) => {
              return (
                <Col lg={3} key={key}>
                  <Card
                    movie={movie}
                    handleRateMovie={handleRateMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                </Col>
              );
            })}
        </Row>
      );
    });
  };

  const handleRateMovie = async (movie) => {
    try {
      await MovieService.rate(movie.movieId, movie);
      handleGetMovies();
    } catch (error) {
      console.log(error);
      alert("Error al calificar");
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await MovieService.delete(id);
      handleGetMovies();
    } catch (error) {
      console.log(error);
      alert("Error al calificar");
    }
  };

  return (
    <Container className="App container custom-container">
      {handleRenderMovies()}
    </Container>
  );
}

export default Home;
