import React from 'react'; //styles

import './moviePreview.css'; //api

const IMG_API = 'https://image.tmdb.org/t/p/w275/';

function MoviePreview({
  title,
  poster,
  overview,
  vote_average
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "preview-info-headline"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "preview-info-description"
  }, " ", overview), /*#__PURE__*/React.createElement("span", {
    className: "preview-info-rating"
  }), /*#__PURE__*/React.createElement("button", {
    className: "watch"
  }, "Pozrie\u0165 trailer"));
}

export default MoviePreview;