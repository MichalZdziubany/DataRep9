import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
//navigates to a new route without refreshing
import { Link } from 'react-router-dom';

const MovieItem = (props)=> {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.poster} alt={props.mymovie.title} />
            <footer>{props.mymovie.year}</footer>
          </blockquote>
        </Card.Body>
        {/* sends you to the edit route with the id of the movie you want to edit */}
        <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
      </Card>
    </div>
  );
}

export default MovieItem;