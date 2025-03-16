import React, { useState, useRef } from "react";
import SongCard from "./SongCard";
import "./SongList.css";

const [songsData, setSongsData] = React.useState([]);

React.useEffect(() => {
  fetch("songs.json")
    .then((res) => res.json())
    .then((data) => setSongsData(data));
}, [])

const SongList = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());

  const handlePlay = (index) => {
    setCurrentSong(songs[index]);
    audioRef.current.src = songs[index].filePath;
    audioRef.current.play();
  };

  return (
    <div className="songList">
      <h1>Best of MCS - No Copyright Sounds</h1>
      <div className="songItemContainer">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} index={index} onPlay={handlePlay} />
        ))}
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default SongList;
