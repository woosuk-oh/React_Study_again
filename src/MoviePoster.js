import React, {Component} from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

class MoviePoster extends Component {
  render() {
    return (
      <div>
        <img src={this.props.poster} alt="movie poster"/>

      </div>
    );
  }
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};
MoviePoster.defaultProps = {};

export default MoviePoster;
