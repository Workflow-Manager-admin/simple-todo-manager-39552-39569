import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import AppBar from "../components/AppBar";
import "../assets/design-system.css";

/**
 * PUBLIC_INTERFACE
 * Page to add a new todo.
 * @param {function} onBack
 * @param {function} onAdd
 */
function AddTodoPage({ onBack, onAdd }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), detail: detail.trim() });
  };
  return (
    <div className="body--screen">
      <StatusBar />
      <AppBar title="Add Task" showBack={true} onBack={onBack} />
      <main>
        <form id="add-todo-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="todo-title" className="input-label typo-11">
              Title
            </label>
            <input
              type="text"
              id="todo-title"
              maxLength={64}
              className="typo-11"
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={{ width: "100%", padding: "8px 0", border: "none", outline: "none", background: "transparent" }}
              required
            />
            <div className="input-underline"></div>
          </div>
          <div className="input-container">
            <label htmlFor="todo-detail" className="input-label typo-11">
              Detail
            </label>
            <input
              type="text"
              id="todo-detail"
              maxLength={128}
              className="typo-11"
              value={detail}
              onChange={e => setDetail(e.target.value)}
              style={{ width: "100%", padding: "8px 0", border: "none", outline: "none", background: "transparent" }}
            />
            <div className="input-underline"></div>
          </div>
          <div className="add-btn-group">
            <button className="add-btn typo-12" type="submit">
              ADD
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddTodoPage;
