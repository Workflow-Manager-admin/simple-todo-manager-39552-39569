import React from "react";
import "../assets/design-system.css";

/**
 * AppBar/top bar for pages.
 * 
 * @param {string} title
 * @param {boolean} showBack
 * @param {function} onBack
 * @param {boolean} [rightCircleIcon] - Show the right round icon.
 */
function AppBar({ title, showBack, onBack, rightCircleIcon = false }) {
  return (
    <div className="app-bar">
      {showBack && (
        <button
          className="icon-btn"
          aria-label="Back"
          style={{
            position: "absolute",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)"
          }}
          onClick={onBack}
        >
          <span className="icon" style={{ width: 25, height: 25, background: "var(--color-ffffff)" }} />
        </button>
      )}
      <span className="app-bar__title typo-8">{title}</span>
      {rightCircleIcon && (
        <span className="app-bar__icon icon" style={{ background: "var(--color-d6d7ef)" }} />
      )}
    </div>
  );
}

export default AppBar;
