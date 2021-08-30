import './App.css';
import React, { Component, useState } from 'react'
import MovieList from './Components/MovieList';
import { moviesData } from './Const/Data';
import SearchAppBar from './Components/Navbar';
const App = () => {
  const [movies, setMovies] = useState(moviesData)
  const [searchText, setSearchText] = useState("")
  return (
    <div className="App">
      <SearchAppBar setSearchText={setSearchText}/>
      <MovieList movies={movies} searchText={searchText} />
     
      
       

    </div>
  )
}

export default App
