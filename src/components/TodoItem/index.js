import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  const { id, description, isComplete } = todo;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => onToggleComplete(id)}
      />
      <span className={isComplete ? 'completed' : ''}>{description}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;