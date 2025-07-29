import React, { useState } from "react";
import "./App.css";
import "./assets/design-system.css";
import TodosPage from "./pages/TodosPage";
import AddTodoPage from "./pages/AddTodoPage";
import EditTodoPage from "./pages/EditTodoPage";
import CompletedPage from "./pages/CompletedPage";

// Helper: basic localStorage persistence key
const STORAGE_KEY = "todos-v1";

/**
 * Load initial todos from localStorage if present
 */
function loadTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      return JSON.parse(data) || [];
    } catch {
      return [];
    }
  }
  return [];
}

/**
 * Save todos to localStorage
 */
function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// PUBLIC_INTERFACE
function App() {
  // PAGE STATE: "list" | "add" | {edit:id} | "completed"
  const [page, setPage] = useState("list");
  const [todos, setTodos] = useState(loadTodos);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all' | 'completed'

  const handleAddClick = () => {
    setPage("add");
  };
  const handleTodoAdd = (data) => {
    const newTodo = {
      id: Math.random().toString(36).slice(2),
      title: data.title,
      detail: data.detail,
      completed: false
    };
    const updated = [...todos, newTodo];
    setTodos(updated);
    saveTodos(updated);
    setPage("list");
    setFilter("all");
  };
  const handleTodoEdit = (id) => {
    setEditId(id);
    setPage("edit");
  };
  const handleEditSubmit = (updatedTodo) => {
    const updated = todos.map(t =>
      t.id === updatedTodo.id ? updatedTodo : t
    );
    setTodos(updated);
    saveTodos(updated);
    setPage("list");
    setFilter("all");
  };
  const handleDelete = (id) => {
    const updated = todos.filter(t => t.id !== id);
    setTodos(updated);
    saveTodos(updated);
  };
  const handleComplete = (id) => {
    const updated = todos.map(t =>
      t.id === id ? { ...t, completed: true } : t
    );
    setTodos(updated);
    saveTodos(updated);
  };
  // Navigation
  const handleNavAll = () => {
    setFilter("all");
    setPage("list");
  };
  const handleNavCompleted = () => {
    setFilter("completed");
    setPage("completed");
  };
  const handleBack = () => {
    setPage("list");
    setFilter("all");
    setEditId(null);
  };
  const handleCancelEdit = () => {
    setPage("list");
    setEditId(null);
  };

  // Page render logic
  if (page === "add") {
    return (
      <AddTodoPage
        onBack={handleBack}
        onAdd={handleTodoAdd}
      />
    );
  }
  if (page === "edit" && editId) {
    const todo = todos.find(t => t.id === editId);
    return (
      <EditTodoPage
        todo={todo}
        onBack={handleBack}
        onEdit={handleEditSubmit}
        onCancel={handleCancelEdit}
      />
    );
  }
  if (page === "completed") {
    return (
      <CompletedPage
        todos={todos.filter(t => t.completed)}
        onBack={handleBack}
      />
    );
  }
  // Default: List page, filterable.
  return (
    <TodosPage
      todos={todos}
      filter={filter}
      onFab={handleAddClick}
      onEdit={handleTodoEdit}
      onComplete={handleComplete}
      onDelete={handleDelete}
      onNavAll={handleNavAll}
      onNavCompleted={handleNavCompleted}
    />
  );
}

export default App;
