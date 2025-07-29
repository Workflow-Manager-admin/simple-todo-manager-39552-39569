import React from "react";
import "../assets/design-system.css";

/**
 * Individual todo item for display in lists.
 * PUBLIC_INTERFACE
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {boolean} props.completed
 * @param {function} [props.onComplete]
 * @param {function} [props.onEdit]
 * @param {function} [props.onDelete]
 * @param {boolean} [props.hideActions] - Hide actions for complete page
 */
function TodoItem({
  title,
  subtitle,
  completed,
  onComplete,
  onEdit,
  onDelete,
  hideActions
}) {
  return (
    <div className="todo-item" style={{
      minHeight: "82px",
      padding: "22px 18px",
      borderRadius: "var(--radius-15)",
      background: "var(--color-ffffff)",
      boxShadow: "var(--shadow-0)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div className="titles" style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div className="todo-title typo-9 ellipsis" style={{
          marginBottom: 5,
          fontFamily: "'Jost', sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "18.785px",
          color: "var(--color-9395d3)",
          maxWidth: 180,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>{title}</div>
        <div className="todo-subtitle typo-10 ellipsis" style={{
          margin: 0,
          fontFamily: "'Jost', sans-serif",
          fontSize: "10px",
          fontWeight: 400,
          lineHeight: "14.45px",
          color: "var(--color-000000)",
          maxWidth: 220,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>{subtitle}</div>
      </div>
      {!hideActions && (
        <div className="todo-actions" style={{ display: "flex", gap: 12 }}>
          {/* Complete/Check */}
          <button
            className="icon-btn"
            aria-label="check"
            title="Complete"
            onClick={onComplete}
            disabled={completed}
            style={{ opacity: completed ? 0.4 : 1 }}
          >
            {/* Check circle SVG */}
            <span className="icon checkcircle" style={{
              width: 25, height: 25, background: "var(--color-8b8787)", borderRadius: "50%"
            }} />
          </button>
          {/* Edit */}
          <button className="icon-btn" aria-label="edit" title="Edit" onClick={onEdit}>
            <span className="icon pencil" style={{
              width: 25, height: 25, background: "var(--color-8b8787)", borderRadius: "50%"
            }} />
          </button>
          {/* Delete */}
          <button className="icon-btn" aria-label="delete" title="Delete" onClick={onDelete}>
            <span className="icon trash" style={{
              width: 25, height: 25, background: "var(--color-8b8787)", borderRadius: "50%"
            }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
