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
      {/* app-bar with right icon */}
      <AppBar title="Add Task" showBack={true} onBack={onBack} rightCircleIcon={true} />
      <main>
        <form id="add-todo-form" onSubmit={handleSubmit}>
          <div className="input-container" style={{ marginTop: "35px" }}>
            <label htmlFor="todo-title" className="input-label typo-11" style={{ marginBottom: "10px" }}>
              Title
            </label>
            <input
              type="text"
              id="todo-title"
              maxLength={64}
              className="typo-11"
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 0",
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: 'Jost, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '23.12px',
                color: "var(--color-8b8787)",
              }}
              required
            />
            <div className="input-underline"></div>
          </div>
          <div className="input-container" style={{ marginBottom: "8px" }}>
            <label htmlFor="todo-detail" className="input-label typo-11" style={{ marginBottom: "10px" }}>
              Detail
            </label>
            <input
              type="text"
              id="todo-detail"
              maxLength={128}
              className="typo-11"
              value={detail}
              onChange={e => setDetail(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 0",
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: 'Jost, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '23.12px',
                color: "var(--color-8b8787)"
              }}
            />
            <div className="input-underline"></div>
          </div>
          <div className="add-btn-group" style={{
            margin: "36px auto 0 auto",
            borderRadius: "var(--radius-15)",
            background: "var(--color-9395d3)",
            boxShadow: "var(--shadow-0)",
            width: "386px",
            maxWidth: "95%",
            height: "65px",
            display: "flex",
            justifyContent: "center", alignItems: "center"
          }}>
            <button
              className="add-btn typo-12"
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "var(--color-ffffff)",
                fontSize: "20px",
                fontWeight: 600,
                fontFamily: 'Jost, sans-serif',
                cursor: "pointer",
              }}>
              ADD
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddTodoPage;
