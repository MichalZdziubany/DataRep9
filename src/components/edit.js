//add all imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
//useParams in this case gets the id of the movie we want to edit
//useNavigated redirects the user back to the read component
//add state variables to your functional components
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const navigate = useNavigate();

//edits the movie to what the user inputs
useEffect(() => {
    axios.get('http://localhost:4000/api/movies/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

//posts the edited movie to the database
const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { id, title, year, poster };
    axios.put('http://localhost:4000/api/movies/' + id, newMovie)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

{/*form to edit movie and sent to database*/}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Edit Movie Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Edit Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Movie" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}