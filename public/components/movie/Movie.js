import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //components

import MoviePreview from '../moviePreview/MoviePreview'; //styles

import './movie.css';
const IMG_API = 'https://image.tmdb.org/t/p/w1280/';

function Movie({
  title,
  poster_path,
  id,
  overview,
  vote_average
}) {
  const [preview, setPreview] = useState(false);
  return /*#__PURE__*/React.createElement(Link, {
    className: "link",
    to: `/SingleMovie/${id}`,
    title: title,
    poster: poster_path,
    overview: overview,
    rating: vote_average
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPreview(true),
    onMouseLeave: () => setPreview(false),
    className: "movie"
  }, /*#__PURE__*/React.createElement("img", {
    className: "movie-img",
    loading: "lazy",
    width: "200px",
    height: "300px",
    src: IMG_API + poster_path,
    alt: title
  }), /*#__PURE__*/React.createElement("div", {
    className: "movie-info"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "movie-info-title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "movie-info-rating"
  }, vote_average)), preview && /*#__PURE__*/React.createElement(MoviePreview, {
    title: title,
    poster: poster_path,
    overview: overview,
    rating: vote_average
  })));
}

export default Movie;