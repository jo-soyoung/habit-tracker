import React from 'react';

const Nav = props => {
  return (
    <header className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </header>
  );
};

export default Nav;
