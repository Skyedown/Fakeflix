import React from 'react'; //styles

import './register.css';

function Register() {
  return /*#__PURE__*/React.createElement("div", {
    className: "register"
  }, /*#__PURE__*/React.createElement("div", {
    class: "container"
  }, /*#__PURE__*/React.createElement("div", {
    class: "header"
  }, /*#__PURE__*/React.createElement("h2", null, "Zaregistruj sa")), /*#__PURE__*/React.createElement("form", {
    id: "form",
    class: "form"
  }, /*#__PURE__*/React.createElement("div", {
    class: "form-control"
  }, /*#__PURE__*/React.createElement("label", {
    for: "name"
  }, "Meno"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Zadaj tvoje meno",
    id: "name"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-check-circle"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-exclamation-circle"
  }), /*#__PURE__*/React.createElement("small", null, "Error message")), /*#__PURE__*/React.createElement("div", {
    class: "form-control"
  }, /*#__PURE__*/React.createElement("label", {
    for: "username"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Zadaj email",
    id: "email"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-check-circle"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-exclamation-circle"
  }), /*#__PURE__*/React.createElement("small", null, "Error message")), /*#__PURE__*/React.createElement("div", {
    class: "form-control"
  }, /*#__PURE__*/React.createElement("label", {
    for: "username"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Password",
    id: "password"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-check-circle"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-exclamation-circle"
  }), /*#__PURE__*/React.createElement("small", null, "Error message")), /*#__PURE__*/React.createElement("div", {
    class: "form-control"
  }, /*#__PURE__*/React.createElement("label", {
    for: "username"
  }, "Password check"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Password two",
    id: "password2"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-check-circle"
  }), /*#__PURE__*/React.createElement("i", {
    class: "fas fa-exclamation-circle"
  }), /*#__PURE__*/React.createElement("small", null, "Error message")), /*#__PURE__*/React.createElement("button", null, "Submit"))));
}

export default Register;