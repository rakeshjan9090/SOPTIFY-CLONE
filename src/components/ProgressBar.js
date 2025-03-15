import React, { useState, useEffect } from "react";

const ProgressBar = ({ audioRef }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const updateProgress = () => {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      };
  
      audioRef.current.addEventListener("timeupdate", updateProgress);
      return () => {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      };
    }, []);
  
    return (
      <input
        type="range"
        value={progress}
        onChange={(e) => (audioRef.current.currentTime = (e.target.value * audioRef.current.duration) / 100)}
      />
    );
};

export default ProgressBar;
  