function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react'; //components

import Navbar from '../../components/navbar/Navbar';
import Movie from '../../components/movie/Movie'; //styles

import './search.css'; //API

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7a4e7f23596217345f8eec19e3cb44f8&language=en-US&query=';

function Search() {
  const [querry, setQuerry] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(querry);

  const getQuerry = querry => {
    setQuerry(querry);
  };

  useEffect(() => {
    if (querry) {
      fetch(SEARCH_API + querry).then(res => res.json()).then(data => {
        setSearchResults(data.results);
      }, [querry]);
    } else {}
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement(Navbar, {
    onSubmit: getQuerry
  }), /*#__PURE__*/React.createElement("div", {
    className: "search-results"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-results-title"
  }, "V\xFDsledky vyh\u013Ead\xE1vania pre \"", querry, "\""), /*#__PURE__*/React.createElement("div", {
    className: "search-results-movies"
  }, searchResults.length > 0 && searchResults.map(movie => /*#__PURE__*/React.createElement(Movie, _extends({
    key: movie.id
  }, movie))))));
}

export default Search;