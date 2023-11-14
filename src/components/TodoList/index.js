import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('none');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false, dueDate: null }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const setDueDate = (index, dueDate) => {
    const updatedTodos = [...todos];
    updatedTodos[index].dueDate = dueDate;
    setTodos(updatedTodos);
  };

  const filterAndSortTodos = () => {
    let filteredTodos = [...todos];
    
    switch (filter) {
      case 'completed':
        filteredTodos = filteredTodos.filter((todo) => todo.completed);
        break;
      case 'incomplete':
        filteredTodos = filteredTodos.filter((todo) => !todo.completed);
        break;
      default:
        break;
    }

    switch (sort) {
      case 'dueDate':
        filteredTodos.sort((a, b) => (a.dueDate || '') - (b.dueDate || ''));
        break;
      case 'completionStatus':
        filteredTodos.sort((a, b) => a.completed - b.completed);
        break;
      default:
        break;
    }

    return filteredTodos;
  };

  return (
    <div>
      
      <div>
        <label>
          Show:
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <label>
          Sort by:
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="none">None</option>
            <option value="dueDate">Due Date</option>
            <option value="completionStatus">Completion Status</option>
          </select>
        </label>
      </div>
      <ul>
        {filterAndSortTodos().map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <input
              type="text"
              value={todo.text}
              onChange={(e) => editTodo(index, e.target.value)}
            />
            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <input
              type="date"
              value={todo.dueDate || ''}
              onChange={(e) => setDueDate(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;