import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import AppBar from "../components/AppBar";
import "../assets/design-system.css";

/**
 * PUBLIC_INTERFACE
 * Editable todo page for updating, with cancel/back.
 * @param {object} props
 * - todo: {id, title, detail, completed}
 * - onBack
 * - onEdit
 * - onCancel
 */
function EditTodoPage({ todo, onBack, onEdit, onCancel }) {
  const [title, setTitle] = useState(todo?.title || "");
  const [detail, setDetail] = useState(todo?.detail || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onEdit({ ...todo, title: title.trim(), detail: detail.trim() });
  };
  return (
    <div className="body--screen">
      <StatusBar />
      <AppBar title="Edit Task" showBack={true} onBack={onBack} rightCircleIcon={false} />
      <main>
        <form id="edit-todo-form" onSubmit={handleSubmit}>
          <div className="input-container" style={{ marginTop: "35px" }}>
            <label htmlFor="edit-todo-title" className="input-label typo-11" style={{ marginBottom: "10px" }}>
              Title
            </label>
            <input
              type="text"
              id="edit-todo-title"
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
                color: "var(--color-8b8787)"
              }}
              required
            />
            <div className="input-underline"></div>
          </div>
          <div className="input-container" style={{ marginBottom: "8px" }}>
            <label htmlFor="edit-todo-detail" className="input-label typo-11" style={{ marginBottom: "10px" }}>
              Detail
            </label>
            <input
              type="text"
              id="edit-todo-detail"
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
          <div style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            maxWidth: 386,
            margin: "36px auto 0 auto"
          }}>
            {/* Update button matches Figma, normally on left */}
            <div className="add-btn-group" style={{
              width: 170,
              borderRadius: "var(--radius-15)",
              background: "var(--color-9395d3)",
              boxShadow: "var(--shadow-0)"
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
                }}
              >
                Update
              </button>
            </div>
            {/* Cancel button, styled according to Figma */}
            <div className="add-btn-group" style={{
              width: 170,
              borderRadius: "var(--radius-15)",
              background: "var(--color-d6d7ef)",
              boxShadow: "var(--shadow-0)"
            }}>
              <button
                className="add-btn typo-12"
                type="button"
                id="cancel-edit-btn"
                onClick={onCancel}
                style={{
                  color: "var(--color-8b8787)",
                  background: "none",
                  fontSize: "20px",
                  fontWeight: 600,
                  fontFamily: 'Jost, sans-serif',
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default EditTodoPage;
