import React, { memo, useCallback } from 'react';
import DeleteBtn from './deleteBtn';
import PopUp from './pop-up/popUp';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  return (
    <>
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <DeleteBtn habit={habit} onDelete={onDelete} />
      </li>

      {habit.count === 21 && <PopUp habit={habit} onDelete={onDelete} />}
    </>
  );
});

export default Habit;
