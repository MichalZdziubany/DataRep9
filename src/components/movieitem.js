import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
//navigates to a new route without refreshing
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

//send the specific movie by id to be deleted from the movie list
function MovieItem(props) {
  const handleDelete = (e) => {
      e.preventDefault();
      axios.delete('http://localhost:4000/api/movies/' + props.mymovie._id)
          .then(() => {
              props.Reload(); // Refresh the movie list after deletion
          })
          .catch((error) => {
              console.error("Error deleting movie:", error);
          });
        }
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
         {/* delete button to invoke handle delete method */}
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}



export default MovieItem;