import React from "react";
import "./PlaylistCard.css";
import ".playlistList.js";

const PlaylistCard = ({ playlistList }) => {
  return (
    <div className="playlistCard">
      <img src={playlist.cover} alt={playlist.name} className="playlistCover" />
      <div className="playlistInfo">
        <h3>{playlist.name}</h3>
        <p>{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
