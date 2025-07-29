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
    <div className="todo-item">
      <div className="titles">
        <div className="todo-title typo-9 ellipsis">{title}</div>
        <div className="todo-subtitle typo-10 ellipsis">{subtitle}</div>
      </div>
      {!hideActions && (
        <div className="todo-actions">
          {/* Complete/Check */}
          <button
            className="icon-btn"
            aria-label="check"
            title="Complete"
            onClick={onComplete}
            disabled={completed}
            style={{ opacity: completed ? 0.4 : 1 }}
          >
            <span className="icon checkcircle" />
          </button>
          {/* Edit */}
          <button className="icon-btn" aria-label="edit" title="Edit" onClick={onEdit}>
            <span className="icon pencil" />
          </button>
          {/* Delete */}
          <button className="icon-btn" aria-label="delete" title="Delete" onClick={onDelete}>
            <span className="icon trash" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
