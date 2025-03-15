import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Spotify Clone</h2>
      <ul>
        <li>🏠 Home</li>
        <li>🔍 Search</li>
        <li>🎵 Your Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;