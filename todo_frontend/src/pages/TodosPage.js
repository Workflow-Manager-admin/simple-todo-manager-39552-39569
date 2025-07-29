import React from "react";
import StatusBar from "../components/StatusBar";
import AppBar from "../components/AppBar";
import FabButton from "../components/FabButton";
import TodoItem from "../components/TodoItem";
import "../assets/design-system.css";

/**
 * PUBLIC_INTERFACE
 * Main to-do listing page with navbar, todo-list, fab add, actions.
 * @param {object} props
 */
function TodosPage({
  todos,
  onFab,
  onEdit,
  onComplete,
  onDelete,
  onNavAll,
  onNavCompleted,
  filter // 'all' | 'completed'
}) {
  // If "all", show all todos; if completed: show only completed
  const shownTodos = filter === "completed"
    ? todos.filter(t => t.completed)
    : todos;

  return (
    <div className="body--screen" style={{ minHeight: '100vh' }}>
      <StatusBar />
      <AppBar title="TODO APP" rightCircleIcon={true} />
      <nav className="navbar" style={{ marginBottom: "10px" }}>
        <button
          className="navbar-button"
          aria-label="playlist"
          onClick={onNavAll}
          style={{
            opacity: filter === "all" ? 1 : 0.6,
            background: "none",
            border: "none"
          }}
        >
          <span className="icon playlist" />
        </button>
        <span className="nav-label typo-6" style={{
          color: filter === "all" ? "var(--color-9395d3)" : "var(--color-8b8787)",
          fontWeight: filter === "all" ? 600 : 400,
          marginLeft: "10px",
          marginRight: "20px"
        }}>All</span>
        <button
          className="navbar-icon"
          aria-label="tick"
          onClick={onNavCompleted}
          style={{
            opacity: filter === "completed" ? 1 : 0.6,
            background: "none",
            border: "none"
          }}
        >
          <span className="icon tick" />
        </button>
        <span className="nav-label typo-7" style={{
          color: filter === "completed" ? "var(--color-8b8787)" : "var(--color-9395d3)",
          fontWeight: filter === "completed" ? 600 : 400,
          marginLeft: "10px"
        }}>Completed</span>
      </nav>
      <section className="todos-list" style={{ gap: "18px" }}>
        {shownTodos.length === 0 && (
          <div className="todo-item">
            <div className="titles">
              No todos yet.
            </div>
          </div>
        )}
        {shownTodos.map(todo => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            subtitle={todo.detail}
            completed={todo.completed}
            onComplete={() => onComplete(todo.id)}
            onEdit={() => onEdit(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </section>
      <FabButton onClick={onFab} />
    </div>
  );
}
export default TodosPage;
