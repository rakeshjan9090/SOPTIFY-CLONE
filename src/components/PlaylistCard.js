import React from "react";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {
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
