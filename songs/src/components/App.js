import React from "react";
//Import named export from a file
import { selectSong } from "../actions";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
