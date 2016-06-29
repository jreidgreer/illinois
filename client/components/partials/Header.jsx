import React from 'react';

export default () =>
  <nav className="navbar navbar-light bg-faded">
    <button
      className="navbar-toggler hidden-sm-up"
      type="button"
      data-toggle="collapse"
      data-target="#exCollapsingNavbar2"
    >
      &#9776;
    </button>
    <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
      <a className="navbar-brand" href="#">Illinois Data Portal</a>
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Legislature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
