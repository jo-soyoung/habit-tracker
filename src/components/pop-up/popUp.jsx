import React from 'react';
import styles from './popUp.module.css';
import DeleteBtn from '../deleteBtn';

const PopUp = ({ habit, onDelete }) => {
  return (
    <div className={styles.box}>
      <strong>Congrats!</strong>
      <p>{`You've done ${habit.name} for ${habit.count} times!`}</p>
      <DeleteBtn habit={habit} onDelete={onDelete} />
    </div>
  );
};

export default PopUp;
