import React from 'react';

const Nav = props => {
  return (
    <header className="navbar">
      <h1>21 Days of Habit Tracker</h1>
      <p>
        It takes <span>21 days</span> to form a habit
      </p>
      <strong className="navbar-count-announce">
        <span className="navbar-count">{props.totalCount}</span> habits are
        being formed!
      </strong>
    </header>
  );
};

export default Nav;
