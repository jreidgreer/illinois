import React from 'react';
import ReactDOM from 'react-dom';

// Load in React Router components
import { Router, Route, browserHistory } from 'react-router';

// Load in top level components
import Index from './Index.jsx';
import LegislatureMember from './LegislatureMember.jsx';

// Load in jQuery & Bootstrap JS
// import 'jquery';
// import 'bootstrap';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index} />
    <Route path="/legislature/:id" component={LegislatureMember} />
  </Router>
  ), document.getElementById('app')
);
