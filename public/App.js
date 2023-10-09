import { BrowserRouter, Routes, Route } from 'react-router-dom'; //styles

import './App.css'; //pages

import List from './pages/list/List';
import SingleMovie from './pages/movies/SingleMovie';
import Error from './pages/error/Error';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Search from './pages/search/Search'; //render

function App() {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/register",
    element: /*#__PURE__*/React.createElement(Register, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/search",
    element: /*#__PURE__*/React.createElement(Search, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/list",
    element: /*#__PURE__*/React.createElement(List, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/SingleMovie/:movieId",
    element: /*#__PURE__*/React.createElement(SingleMovie, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(Error, null)
  })));
}

export default App;