import React from "react";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    // prevent default action
      e.preventDefault();
      if (value) {
        // add todo
        addTodo(value);
        // clear form after submission
        setValue('');
      }
    };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task for today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
