import React from 'react'

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Movie = ({movie}) => {
    return (
    
      <div>
        <a className="Link" href="https://codepen.io/simoberny/pen/qxxOqj" target="_blank"></a>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={movie.image} />
              <h1>{movie.name}</h1>
              <h4>{movie.date}</h4>
              <p className="type">{movie.type}</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                {movie.description} 
              </p>
            </div>
            <div className="movie_social">
              <ul>
                <li><i className="material-icons">
                   <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"></Typography>
                    <Rating name="read-only" value={movie.rating} readOnly />
                    </Box></i></li>
              </ul>
            </div>
          </div>
          <div className="blur_back bright_back" style={{backgroundImage:`url(${movie.image})`}} />
        </div>
      </div>
    )
}
 


export default Movie
