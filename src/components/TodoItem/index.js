import React, { useState } from 'react';

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleCheckboxChange = () => {
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    props.onDelete();
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleCheckboxChange}
      />
      <span>{props.description}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;