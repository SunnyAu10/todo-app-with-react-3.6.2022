import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  //Events
  function deleteTodo() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  function deleteHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            deleted: true
          };
        }
        return item;
      })
    );
    setTimeout(deleteTodo, 500);
  }

  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  }
  return (
    <div className={`todo ${todo.deleted ? "fall" : ""}`}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
