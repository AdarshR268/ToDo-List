import React, { useState } from 'react';
import './SingleTodo.css';

const SingleTodo = ({ todo, handleDelete, handleChange, setTodos, task, todos }) => {
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleDone = () => {
    setIsDone(true);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleClick = (todo) => {
    setEdit(false);
    if (task !== null) {
      setTodos(
        todos.map((tod) => {
          if (tod.task === todo.task) {
            tod.task = task;
          }
          return tod;
        })
      );
    }
    setTask(null);
  };

  return (
    <div className="single">
      {isDone ? (
        <s className="todo-name">
          <b>{todo.task}</b>
        </s>
      ) : isEdit === false ? (
        <h4 className="todo-name">{todo.task}</h4>
      ) : (
        <div className="inp">
          <input
            className="int"
            type="text"
            defaultValue={todo.task}
            onChange={(e) => handleChange(e)}
          />
          <button className="btn1" onClick={() => handleClick(todo)}>
            UPDATE
          </button>
        </div>
      )}
      <div className="buttons">
        <button className="btns edit-btn" onClick={handleEdit}>
          EDIT
        </button>
        <button className="btns complete-btn" onClick={handleDone}>
          COMPLETED
        </button>
        <button className="btns delete-btn" onClick={() => handleDelete(todo)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
