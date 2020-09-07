import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactStars from "react-rating-stars-component";

export default function MovieCard(props) {
  const {
    name,
    description,
    image,
    actors,
    rating,
    genderId,
    releaseDate,
  } = props.movie;

  let stars = 0;
  if (rating > 5 && rating < 10) {
    stars = 1;
  } else if (rating >= 10 && rating < 25) {
    stars = 2;
  } else if (rating >= 25 && rating < 50) {
    stars = 3;
  } else if (rating >= 50 && rating < 80) {
    stars = 4;
  } else if (rating >= 80) {
    stars = 5;
  }

  const ratingChanged = (newRating) => {
    props.handleRateMovie({ movieId: props.movie.id, rating: newRating });
  };

  return (
    <Card className="custom-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height={300}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5">{name.substr(0, 15)}...</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description.substr(0, 30)}...
          </Typography>
          <Typography>Actores</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {actors.substr(0, 50)}...
          </Typography>
          <Typography>Genero</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {genderId.name}
          </Typography>
          <Typography>Calificación</Typography>
          <ReactStars
            count={5}
            value={stars}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </CardContent>
      </CardActionArea>
      {localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user")).profileId.id === 1 && (
          <CardActions>
            <Button size="small" color="primary">
              Editar
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={() => props.handleDeleteMovie(props.movie.id)}
            >
              Eliminar
            </Button>
          </CardActions>
        )}
    </Card>
  );
}
