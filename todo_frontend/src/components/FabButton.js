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
      {/* SVG plus icon for Figma (vertical + horizontal bold lines, white) */}
      <span style={{width: 21, height: 23, display: "flex", alignItems: "center", justifyContent: "center"}}>
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none">
          <rect width="21" height="23" rx="5" fill="#9395d3" opacity="0"/>
          <path d="M10.5 4v15" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
          <path d="M4 11.5h13" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </button>
  );
}

export default FabButton;
