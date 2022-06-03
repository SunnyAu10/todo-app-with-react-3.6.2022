import React from "react";
// Import components
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            text={todo.text}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
