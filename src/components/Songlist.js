import React, { useState, useRef } from "react";
import SongCard from "./SongCard";
import "./SongList.css";

const songs = [
  { songName: "Diya Aur Baati Hum", filePath: "/songs/1.mp3", coverPath: "/covers/cover1.jpg" },
  { songName: "Har Funn Maula", filePath: "/songs/2.mp3", coverPath: "/covers/cover2.jpg" },
  { songName: "Guilty - Karan Aujla", filePath: "/songs/3.mp3", coverPath: "/covers/cover3.jpg" },
];

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
