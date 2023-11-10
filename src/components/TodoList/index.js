import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // State to manage list of to-do items
  const [newTodo, setNewTodo] = useState(''); // State to manage new to-do item input

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: Math.random(),
        text: newTodo,
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Display the list of to-do items */}
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}

      {/* Add new to-do item */}
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoList;