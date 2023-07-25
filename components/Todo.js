// components/Todo.js
import React from "react";

const Todo = ({ todo, onComplete, onDelete }) => {
  const { id, text, emoji, dateAdded, completed } = todo;

  return (
    <div className={`todo-item${completed ? " completed" : ""}`}>
      <input type="checkbox" id={`todo-${id}`} checked={completed} onChange={onComplete} />
      <label htmlFor={`todo-${id}`}>
        {emoji} {text} - Added on: {new Date(dateAdded).toLocaleString()}
      </label>
      <button onClick={onDelete}>❌</button>
    </div>
  );
};

export default Todo;
