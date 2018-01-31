/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
//import MoviePoster from './MoviePoster';

const Movie = ({title, poster}) => {
    // 함수에 const 쓰는 이유
    // https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/


    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1> {title} </h1>
        </div>
    );
};

const MoviePoster = ({poster}) => {
    return (
        <img src={poster} alt="movie poster"/>
    );
};


MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
};


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};


Movie.defaultProps = {};

export default Movie;
