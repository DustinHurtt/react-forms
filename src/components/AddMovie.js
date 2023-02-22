// src/components/AddMovie.js

import { useState } from "react";

function AddMovie({ movies, setMovies, setFiltered }) {
    
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false)

  const handleTitleInput = e => setTitle(e.target.value);
 
  const handleDirectorInput = e => setDirector(e.target.value);
 
  const handleRatingInput = e => setIMDBRating(e.target.value);
 
  const handleOscarsInput = e => setHasOscars(e.target.checked);

  const clearForm = () => {
    setTitle("")
    setDirector("")
    setIMDBRating(5)
    setHasOscars(true)
  }

  const addNewMovie = (newMovie) => {

    if (!newMovie.title) {
        setErrorMessage(!errorMessage)
        clearForm()
        return
    }

    let newMovies = [newMovie, ...movies]
    setMovies(newMovies)
    setFiltered(newMovies)

    clearForm()
    setErrorMessage(false)
  }

  const handleSubmit = (e) => {        // <==  ADD
    e.preventDefault();
    const newMovie = { title, director, IMDBRating, hasOscars };

    // let newMovies = [newMovie, ...movies]

    // newMovies.unshift(newMovie)

    addNewMovie(newMovie)
 
    console.log("Submitted: ", newMovie);
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
  
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleTitleInput}
        />
        
  
        <label>Director: </label>
        <input 
            type="text" 
            name="director" 
            value={director} 
            onChange={handleDirectorInput}
        />
  
        <label>IMDB Rating: </label>
        <input 
            type="number" 
            name="IMDBRating" 
            value={IMDBRating}
            onChange={handleRatingInput} 
        />
  
        <label>Won Oscars: </label>
        <input 
            type="checkbox" 
            name="hasOscars" 
            checked={hasOscars}
            onChange={handleOscarsInput} 
        />
        
        <button type="submit">Add a Movie</button>
      </form>

    {errorMessage && <p>You can not submit a movie without a title.</p>}

    </div>
  );
}

export default AddMovie;
