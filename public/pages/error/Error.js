import React from 'react';
import { Link } from 'react-router-dom'; //styles

import './error.css'; //components

import Navbar from '../../components/navbar/Navbar';

function Error() {
  return /*#__PURE__*/React.createElement("div", {
    className: "error-container"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("div", {
    className: "error-massage"
  }, /*#__PURE__*/React.createElement("h2", null, "Error 404"), /*#__PURE__*/React.createElement("p", null, "Str\xE1nka nen\xE1jden\xE1"), /*#__PURE__*/React.createElement("img", {
    src: "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg",
    alt: "grumpy_cat"
  }), /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "N\xE1vrat na domovsk\xFA str\xE1nku")));
}

export default Error;