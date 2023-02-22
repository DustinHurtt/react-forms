// src/components/FilterMovies.js

import { useState } from "react";

function FilterMovies({ movies, setFiltered}) {
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = e => {
    if (e.target.value === "All") {
        setFiltered(movies)
        return
    }
    setFiltered(movies)
    setFirstLetter(e.target.value);

    console.log("selected", e.target.value);

    let newMovies = [...movies].filter((movie) => {
        console.log("Character", movie.title.charAt(0)) 
        console.log("Letter", firstLetter.toLowerCase())
        return movie.title.charAt(0).toLowerCase() === e.target.value.toLowerCase()
     })

    // newMovies = newMovies.filter((movie) => {
    //    console.log("Character", movie.title.charAt(0)) 
    //    return movie.title.charAt(0).toLowerCase() === firstLetter.toLowerCase()
    // })

    setFiltered(newMovies)
  };

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;