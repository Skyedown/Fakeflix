import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'; //components

import Navbar from '../../components/navbar/Navbar';
import YoutubeEmbed from "../../components/youtubeEmbed/YoutubeEmbed";
import Footer from '../../components/footer/Footer'; //styles

import './singleMovie.css'; //APIs

const BASE_API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=7a4e7f23596217345f8eec19e3cb44f8';
const VIDEO_KEY = '/videos?api_key=7a4e7f23596217345f8eec19e3cb44f8&language=en-US';

function SingleMovie() {
  const {
    movieId
  } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState([]);
  const [key, setKey] = useState("");
  useEffect(() => {
    fetch(BASE_API + movieId + API_KEY).then(res => res.json()).then(data => {
      setMovie(data);
    });
  }, []);
  useEffect(() => {
    fetch(BASE_API + movieId + VIDEO_KEY).then(res => res.json()).then(data => {
      setTrailer(data.results);
      const trailerKey = trailer.find(video => {
        return video.name === "Official Trailer";
      }).key;
      setKey(trailerKey);
    });
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(YoutubeEmbed, {
    embedId: key
  }), /*#__PURE__*/React.createElement("div", {
    className: "single-movie"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-static"
  }, "N\xE1zov filmu")), /*#__PURE__*/React.createElement("h1", {
    className: "title-dynamic"
  }, movie.title)), /*#__PURE__*/React.createElement("div", {
    className: "overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overview-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overview-static"
  }, "Popis")), /*#__PURE__*/React.createElement("p", {
    className: "overview-dynamic"
  }, movie.overview), " ", /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    className: "footing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rating"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rating-static"
  }, "Hodnotenie div\xE1kov"), /*#__PURE__*/React.createElement("div", {
    className: "rating-dynamic"
  }, movie.vote_average)), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate(-1),
    className: "home-btn"
  }, "N\xE1vrat domov"))), /*#__PURE__*/React.createElement(Footer, null));
}

export default SingleMovie;