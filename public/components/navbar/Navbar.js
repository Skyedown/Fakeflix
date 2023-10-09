import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom'; //components
//styles

import './navbar.css'; //API

function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnSubmit = e => {
    props.onSubmit(searchTerm);
    e.preventDefault();
  };

  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "logo",
    to: "/list"
  }, "FakeFlix ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faBed
  })), /*#__PURE__*/React.createElement("div", {
    className: "search-form"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleOnSubmit,
    action: "search"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "search",
    icon: faMagnifyingGlass
  }), /*#__PURE__*/React.createElement("input", {
    className: "search-input",
    type: "text",
    placeholder: "  H\u013Eadaj film",
    value: searchTerm,
    onChange: handleOnChange
  })))));
}

export default Navbar;