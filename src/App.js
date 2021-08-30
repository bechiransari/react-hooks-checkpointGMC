import './App.css';
import React, { Component, useState } from 'react'
import MovieList from './Components/MovieList';
import { moviesData } from './Const/Data';
import SearchAppBar from './Components/Navbar';
import SimpleModal from './Components/Add';


const App = () => {
  const [movies, setMovies] = useState(moviesData)
  const [searchText, setSearchText] = useState("")
  const addMovie=(movie)=>setMovies(movies.concat(movie))
  return (
    <div className="App">
      <SearchAppBar setSearchText={setSearchText}/>
      <SimpleModal addMovie={addMovie} />

      <MovieList movies={movies} searchText={searchText} />
     
      
       

    </div>
  )
}

export default App
