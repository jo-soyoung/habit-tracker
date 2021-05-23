import React from 'react';

const DeleteBtn = ({ habit, onDelete }) => {
  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <button className="habit-button habit-delete" onClick={handleDelete}>
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default DeleteBtn;
