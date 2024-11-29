import MovieItem from "./movieitem";

function Movies(props) {
    return (
        <>
            {props.myMovies.map((movie) => (
                <MovieItem
                    myMovie={movie}
                    key={movie._id}
                    {/*Passes the reload function to trigger a refresh after deletion*/}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Movies;