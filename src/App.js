import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
