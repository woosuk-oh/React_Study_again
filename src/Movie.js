/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import MoviePoster from './MoviePoster';


class Movie extends Component {
  render() {
    return (

      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1> {this.props.title} </h1>
      </div>

    );
  }
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
Movie.defaultProps = {};

export default Movie;
