import React from "react";
import "./SongItem.css";

const SongItem = ({ song, onPlay }) => {
  return (
    <div className="songItem" onClick={() => onPlay(song)}>
      <img src={song.coverPath} alt="Cover" />
      <p>{song.songName}</p>
    </div>
  );
};

export default SongItem;