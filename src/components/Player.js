import React, { useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import "../styles/Player.css";



const Player = ({ songs, currentSong, setCurrentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentSong.filePath));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleNext = () => {
    let nextIndex = (songs.indexOf(currentSong) + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    audioRef.current.src = songs[nextIndex].filePath;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    let prevIndex = (songs.indexOf(currentSong) - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    audioRef.current.src = songs[prevIndex].filePath;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="player">
      <img src={currentSong.coverPath} alt="Cover Art" className="cover" />
      <h2>{currentSong.songName}</h2>

      <div className="controls">
        <button onClick={handlePrevious}>⏮</button>
        <button onClick={handlePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={handleNext}>⏭</button>
      </div>

      <ProgressBar audioRef={audioRef} />
    </div>
  );
};

export default Player;
