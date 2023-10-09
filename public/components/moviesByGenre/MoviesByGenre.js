function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useState, useEffect } from 'react';
import Movie from '../movie/Movie';
import './MoviesByGenre.css';
const EACH_GENRE_API = 'https://api.themoviedb.org/3/discover/movie?&api_key=7a4e7f23596217345f8eec19e3cb44f8&with_genres=';

function MoviesByGenre({
  id,
  name
}) {
  const [movieByGenre, setMovieByGenre] = useState([]);
  useEffect(() => {
    fetch(EACH_GENRE_API + id).then(res => res.json()).then(data => {
      setMovieByGenre(data.results);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "genre-movies-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "movies-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "genres-hdl"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "featured-movies-container"
  }, movieByGenre.length > 0 && movieByGenre.map(movie => /*#__PURE__*/React.createElement(Movie, _extends({
    key: movie.id
  }, movie))), "        ")));
}

export default MoviesByGenre;