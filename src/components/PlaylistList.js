import React from "react";
import PlaylistCard from "./PlaylistCard";
import playlistsData from "../data/playlistsData";
import PlaylistList from './components/PlaylistList';
import "./PlaylistList.css";

const PlaylistList = () => {
  return (
    <div className="playlistList">
      <h2>Your Playlists</h2>
      <div className="playlistContainer">
        {playlistsData.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
