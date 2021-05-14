import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4.05" },
    { title: "Barbie Girl", duration: "3.15" },
    { title: "Backstreet Boys", duration: "2.30" },
    { title: "Macarena", duration: "1.56" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});