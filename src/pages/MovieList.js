import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "../components/MovieCard";
import AddMovie from "../components/AddMovie";
import FilterMovies from "../components/FilterMovies";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [filtered, setFiltered ] = useState(movies)

  console.log("FILTERED", filtered)
 
  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies movies={movies} setFiltered={setFiltered} />
      <AddMovie movies={movies} setMovies={setMovies} setFiltered={setFiltered}/>
      {filtered.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;