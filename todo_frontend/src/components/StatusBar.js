import React from "react";
import "../assets/design-system.css";

/**
 * Status mock bar component - public interface.
 *
 * Shows time & status icons similar to iOS.
 */
// PUBLIC_INTERFACE
function StatusBar() {
  return (
    <div className="status-bar" style={{ position: 'relative', zIndex: 100 }}>
      <div className="status-bar__notch" />
      <div className="status-bar__time">9:41</div>
      <div className="status-bar__icons">
        <span className="icon playlist"></span>
        <span className="icon tick"></span>
        <span className="icon" style={{ width: 16, height: 14, background: 'var(--color-d1d1d6)' }}></span>
        <span className="icon" style={{ width: 25, height: 12, background: 'var(--color-ebebf5)' }}></span>
      </div>
    </div>
  );
}

export default StatusBar;
