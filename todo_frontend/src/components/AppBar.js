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
    <div className="app-bar" style={{ position: "relative", minHeight: "118px" }}>
      {showBack && (
        <button
          className="icon-btn"
          aria-label="Back"
          style={{
            position: "absolute",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2
          }}
          onClick={onBack}
        >
          {/* Real arrow svg instead of placeholder circle */}
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" style={{ display: 'block' }}>
            <circle cx="12.5" cy="12.5" r="12.5" fill="#fff" />
            <path d="M14.8 18.1l-4.2-4.1c-.4-.4-.4-1 0-1.4l4.2-4.1a1 1 0 0 1 1.4 1.4l-3.5 3.4 3.5 3.4a1 1 0 0 1-1.4 1.4z" fill="#9395d3"/>
          </svg>
        </button>
      )}
      <span className="app-bar__title typo-8" style={{
        margin: "0 auto",
        fontFamily: "'Jost', sans-serif",
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "34.68px",
        color: "var(--color-ffffff)"
      }}>{title}</span>
      {rightCircleIcon && (
        <span
          className="app-bar__icon"
          style={{
            position: "absolute",
            right: 36,
            width: 60,
            height: 60,
            top: "50%",
            transform: "translateY(-50%)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Calendar SVG from Figma */}
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="0" y="0" width="60" height="60" rx="16" fill="#d6d7ef"/>
              <rect x="14" y="20" width="32" height="24" rx="6" fill="#F5F4FE" stroke="#9395d3" strokeWidth="2"/>
              <rect x="21" y="26" width="4" height="4" rx="2" fill="#9395d3"/>
              <rect x="27" y="26" width="4" height="4" rx="2" fill="#9395d3"/>
              <rect x="33" y="26" width="4" height="4" rx="2" fill="#9395d3"/>
              <rect x="21" y="32" width="4" height="4" rx="2" fill="#9395d3"/>
              <rect x="27" y="32" width="4" height="4" rx="2" fill="#9395d3"/>
              <rect x="33" y="32" width="4" height="4" rx="2" fill="#9395d3"/>
            </svg>
        </span>
      )}
    </div>
  );
}

export default AppBar;
