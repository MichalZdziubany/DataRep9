import MovieItem from "./movieitem";
//pass the reload function to child components
const Movies = (props)=>{
    return (
        <>
            {props.myMovies.map((movie) => (
                <MovieItem
                    mymovie={movie}
                    key={movie._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Movies;