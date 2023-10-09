function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { useState, useEffect } from 'react'; //components

import Navbar from '../../components/navbar/Navbar';
import TrendingMovies from '../../components/trendingMovies/TrendingMovies';
import MoviesByGenre from '../../components/moviesByGenre/MoviesByGenre';
import Footer from '../../components/footer/Footer';
import Login from '../login/Login'; //consts

const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=7a4e7f23596217345f8eec19e3cb44f8&language=en-US';

function Home() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(GENRES_API).then(res => res.json()).then(data => {
      setGenres(data.genres);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(TrendingMovies, null), genres.length > 0 && genres.map(genre => /*#__PURE__*/React.createElement(MoviesByGenre, _extends({
    key: genre.id
  }, genre))), /*#__PURE__*/React.createElement(Footer, null)));
}

export default Home;