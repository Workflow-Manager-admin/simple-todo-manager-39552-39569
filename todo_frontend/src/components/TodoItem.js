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
            <span style={{width:25,height:25,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#f5f4fe"/>
                <path d="M7 13.5L11 17L18 9" stroke="#9395d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
          {/* Edit */}
          <button className="icon-btn" aria-label="edit" title="Edit" onClick={onEdit}>
            <span style={{width:25,height:25,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <rect x="2.5" y="2.5" width="20" height="20" rx="5" fill="#f5f4fe"/>
                <path d="M9 17h7" stroke="#9395d3" strokeWidth="2"/>
                <path d="M13.586 8a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-.516.27l-2.283.456a.4.4 0 01-.473-.472l.456-2.283a1 1 0 01.27-.516l6.364-6.364z" stroke="#9395d3" strokeWidth="2"/>
              </svg>
            </span>
          </button>
          {/* Delete */}
          <button className="icon-btn" aria-label="delete" title="Delete" onClick={onDelete}>
            <span style={{width:25,height:25,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <rect x="2.5" y="2.5" width="20" height="20" rx="5" fill="#f5f4fe"/>
                <rect x="8" y="10" width="9" height="8" rx="2" stroke="#E87A41" strokeWidth="2"/>
                <path d="M10 12v4M15 12v4" stroke="#E87A41" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="10" y="7" width="4" height="2" rx="1" fill="#E87A41"/>
                <rect x="7" y="8" width="11" height="2" rx="1" fill="#B3B7EE"/>
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
