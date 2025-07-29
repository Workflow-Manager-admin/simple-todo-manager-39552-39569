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
    <div className="status-bar" style={{ position: 'relative', zIndex: 100, width: "100%", height: "44px", minWidth: "414px" }}>
      <div className="status-bar__notch" style={{ width: "100%", height: "30px", background: "var(--color-ffffff)" }} />
      {/* Time on left, icons on right */}
      <div className="status-bar__time" style={{ position: "absolute", left: 20, top: 11, color: "var(--color-000000)", fontSize: "15px", fontFamily: "Jost, sans-serif" }}>9:41</div>
      <div className="status-bar__icons">
        {/* Cell/playlist */}
        <span className="icon playlist" style={{
          width: 30, height: 30, background: "var(--color-8b8787)", borderRadius: "50%"
        }}></span>
        {/* Tick */}
        <span className="icon tick" style={{
          width: 30, height: 30, background: "var(--color-8b8787)", borderRadius: "50%"
        }}></span>
        {/* WiFi symbol placeholder */}
        <span className="icon" style={{
          width: 16, height: 14, background: "var(--color-d1d1d6)", borderRadius: "4px"
        }}></span>
        {/* Battery icon placeholder */}
        <span className="icon" style={{
          width: 25, height: 12, background: "var(--color-ebebf5)", borderRadius: "6px"
        }}></span>
      </div>
    </div>
  );
}

export default StatusBar;
