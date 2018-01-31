/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
//import MoviePoster from './MoviePoster';

function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1> {title} </h1>
        </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="movie poster"/>
    )
}


MoviePoster.propTypes= {
    poster: PropTypes.string.isRequired
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};




Movie.defaultProps = {};

export default Movie;
