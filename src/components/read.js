import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [data, setData] = useState([]);

    //define reload function that takes the data from api
    ///update the state with the new reloaded data
    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <Movies myMovies={data} ReloadData={Reload} />
        </div>
  );
}

export default Read;