import logo from "./logo.svg";
import "./App.css";

import React, { useState, } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Service";
//import Contact from "./pages/Contact";

import Library from "./pages/Library";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
// Remove unused imports
// import logo from './logo.svg'; 
import Search from './pages/Search'; // Ensure correct import





import "./styles/global.css";

function App() {
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const songsData = [
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" }
  ];
  

  return (
    <div className="app">
      <Router> {/* ✅ Ensure Router is wrapping Routes */}
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <Player
            songs={songsData[id]}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/player" element={<Player />} />
          </Routes>
        </div>
        <Player />
      </Router> 
    </div>
  );

  // const [songIndex, setSongIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef(new Audio(songsList[songIndex].filePath));

  // const togglePlayPause = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const nextSong = () => {
  //   let newIndex = songIndex + 1 >= songsList.length ? 0 : songIndex + 1;
  //   setSongIndex(newIndex);
  //   audioRef.current.src = songsList[newIndex].filePath;
  //   audioRef.current.play();
  //   setIsPlaying(true);
  // };

  // const prevSong = () => {
  //   let newIndex = songIndex - 1 < 0 ? songsList.length - 1 : songIndex - 1;
  //   setSongIndex(newIndex);
  //   audioRef.current.src = songsList[newIndex].filePath;
  //   audioRef.current.play();
  //   setIsPlaying(true);
  // };

  // return (
  //   <div className="App">
  //     <h1>Spotify Clone</h1>
  //     <div className="player">
  //       <img src={songsList[songIndex].coverPath} alt="cover" />
  //       <h2>{songsList[songIndex].songName}</h2>
  //       <div className="controls">
  //         <FontAwesomeIcon icon={faStepBackward} size="2x" onClick={prevSong} />
  //         <FontAwesomeIcon
  //           icon={isPlaying ? faPauseCircle : faPlayCircle}
  //           size="2x"
  //           onClick={togglePlayPause}
  //         />
  //         <FontAwesomeIcon icon={faStepForward} size="2x" onClick={nextSong} />
  //       </div>
  //     </div>
  //   </div>

  // );
}

export default App;
