function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import Movie from '../movie/Movie';
import './trendingMovies.css';
const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a4e7f23596217345f8eec19e3cb44f8';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json()).then(data => {
      setMovies(data.results);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "trending-movies-container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "trending-hdl"
  }, "Pr\xE1ve vy\u0161lo"), /*#__PURE__*/React.createElement("div", {
    className: "featured-movies-container"
  }, movies.length > 0 && movies.map(movie => /*#__PURE__*/React.createElement(Movie, _extends({
    key: movie.id
  }, movie)))));
}

export default TrendingMovies;