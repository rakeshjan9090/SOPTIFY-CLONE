import React from "react";
import "./SongCard.css";

const SongCard = ({ song, index, onPlay }) => {
  return (
    <div className="SongCard">
      <img src={song.coverPath} alt={song.songName} />
      <span className="songName">{song.songName}</span>
      <span className="songlistplay">
        <span className="timestamp">
          05:34
          <i
            id={index}
            className="fa-regular songItemPlay fa-circle-play"
            onClick={() => onPlay(index)}
          ></i>
        </span>
      </span>
    </div>
  );
};

export default SongCard;
