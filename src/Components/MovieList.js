import React from 'react'
import Movie from './Movie'

const MovieList = ({movies , searchText}) => {
    return (
        <div>
           { movies
           .filter((el)=> el.name.toUpperCase().includes(searchText.toUpperCase()))
           .map((el)=>(<Movie movie = {el}/>))}{" "}
           
        </div> 
    )
}

export default MovieList
