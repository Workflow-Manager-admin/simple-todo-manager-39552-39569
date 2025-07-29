import React from "react";
import StatusBar from "../components/StatusBar";
import AppBar from "../components/AppBar";
import TodoItem from "../components/TodoItem";
import "../assets/design-system.css";

/**
 * PUBLIC_INTERFACE
 * Page for displaying completed todos only.
 * @param {object} props
 * - todos: array
 * - onBack: func
 */
function CompletedPage({ todos, onBack }) {
  return (
    <div className="body--screen">
      <StatusBar />
      <AppBar title="Completed Task" showBack={true} onBack={onBack} />
      <section className="todos-list">
        {todos.length === 0 && (
          <div className="todo-item">
            <div className="titles">No completed todos.</div>
          </div>
        )}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            subtitle={todo.detail}
            completed={true}
            hideActions={true}
          />
        ))}
      </section>
    </div>
  );
}

export default CompletedPage;
