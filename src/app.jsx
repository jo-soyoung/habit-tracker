import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import Habits from './components/habits';
import Nav from './components/nav';

const App = () => {
  //useState
  const [habits, setHabits] = useState([]);

  //useEffect
  useEffect(() => {
    getLocalHabits();
  }, []);

  useEffect(() => {
    saveLocalHabits();
  }, []);

  // localStorage
  const saveLocalHabits = () => {
    localStorage.setItem('habits', JSON.stringify(habits));
  };

  const getLocalHabits = useCallback(() => {
    if (localStorage.getItem('habits') === null) {
      localStorage.setItem('habits', JSON.stringify([]));
    } else {
      let localHabits = JSON.parse(localStorage.getItem('habits'));
      setHabits(localHabits);
    }
  }, []);

  //functions
  //check whether the count is 21.
  const checkCounts = useCallback(() => {
    const habit = habits.map(habit => {
      return habit;
    });
    console.log(habit);
    if (habit.count === 3) {
      console.log(`You've done ${habit.name} for 3 times!`);
    }
  });

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(item => {
        if (item.count !== 0) {
          return { ...item, count: 0 };
        }
        return item;
      })
    );
  }, []);

  return (
    <div className="app">
      <Nav totalCount={habits.filter(item => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
