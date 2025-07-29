import React from "react";
import "../assets/design-system.css";

/**
 * Floating Add Button (FAB).
 * PUBLIC_INTERFACE
 * @param {function} onClick
 */
function FabButton({ onClick }) {
  return (
    <button className="fab-btn" aria-label="Add New Todo" onClick={onClick}>
      <span className="fab-btn__icon icon plus" />
    </button>
  );
}

export default FabButton;
