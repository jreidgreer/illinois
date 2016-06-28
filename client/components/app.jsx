import React from 'react';
import ReactDOM from 'react-dom';

// Load in React Router components
import { Router, Route, hashHistory } from 'react-router';

// Load in top level components
import Index from './Index.jsx';
import LegislatureMember from './LegislatureMember.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index} />
    <Route path="/legislature/:id" component={LegislatureMember} />
  </Router>
  ), document.getElementById('app')
);
