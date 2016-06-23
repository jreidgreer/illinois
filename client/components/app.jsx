const React = require('react');
const ReactDOM = require('react-dom');

// Load in React Router components
const Router = require('react-router').Router;
const Route = require('react-router').Route;

// Load in top level components
const Index = require('./Index.jsx');

ReactDOM.render((
  <Router>
    <Route path="/" component={Index} />
  </Router>
  ), document.getElementById('app')
);