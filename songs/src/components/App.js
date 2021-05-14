import React from "react";
//Import named export from a file
import { selectSong } from "../actions";
import SongList from "./SongList";

const App = () => {
  return <div><SongList /></div>;
};

export default App;
