import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"; //styles

import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "petusko" && password === "petusko") {
      console.log("Success");
      setEmailError("");
      setPasswordError("");
      setLogged(true);
      navigate("/list");
    }

    if (email !== "peter") {
      setEmailError("Zlý email");
    }

    if (password !== "peter") {
      setPasswordError("Zlé heslo");
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "login-container-title"
  }, "FakeFlix"), /*#__PURE__*/React.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/React.createElement("form", {
    action: "submit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-form-mail"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mail"
  }, "Prihlasovac\xED e-mail"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setEmail(e.target.value),
    placeholder: "Zadaj e-mail",
    id: "email",
    type: "text",
    value: email,
    autoComplete: "off",
    required: true
  })), emailError, /*#__PURE__*/React.createElement("div", {
    className: "login-form-password"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Heslo"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setPassword(e.target.value),
    placeholder: "Zadaj heslo",
    id: "password",
    type: "password",
    value: password,
    required: true
  })), passwordError), /*#__PURE__*/React.createElement(Link, {
    className: "register-btn",
    to: "/register"
  }, "Nem\xE1\u0161 \xFA\u010Det? Zaregistruj sa"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    className: "login-form-button"
  }, "Prihl\xE1si\u0165 sa"))));
}

export default Login;