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
        {/* Playlist SVG */}
        <span style={{width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect x="0.75" y="1.5" width="16.5" height="3" rx="1.5" fill="#8b8787"/>
            <rect x="0.75" y="7.5" width="9" height="3" rx="1.5" fill="#8b8787"/>
          </svg>
        </span>
        {/* Tick SVG */}
        <span style={{width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <path d="M2 7.5L8 13L18 2" stroke="#8b8787" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        {/* WiFi symbol */}
        <span style={{width:16,height:14,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path d="M8 12.5C9.10457 12.5 10 11.6046 10 10.5C10 9.39543 9.10457 8.5 8 8.5C6.89543 8.5 6 9.39543 6 10.5C6 11.6046 6.89543 12.5 8 12.5Z" fill="#d1d1d6"/>
            <path d="M2 6.5C4.66667 4.5 11.3333 4.5 14 6.5" stroke="#d1d1d6" strokeWidth="2"/>
            <path d="M4.5 9C6.125 7.25 9.875 7.25 11.5 9" stroke="#d1d1d6" strokeWidth="2"/>
          </svg>
        </span>
        {/* Battery */}
        <span style={{width:25,height:12,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="1" y="2" width="20" height="8" rx="3" fill="#ebebf5" stroke="#bebfc8" strokeWidth="1"/>
            <rect x="22" y="4" width="2" height="4" rx="1" fill="#ebebf5"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default StatusBar;
