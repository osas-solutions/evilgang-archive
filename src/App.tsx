import { useEffect } from "react";
import Artist from "./Artist"
import type Song from "./SongInterface"

function App() {

  let lol2: Song[] = [];

  // useEffect(() => {

  // });

  return (
    <>
      <h1>EEEEVILLL GANGGGGG ARRRCHIVVVESS</h1>
      <Artist username="usaname" displayname="displ" tunes={lol2}></Artist>
      <Artist username="usanam2" displayname="anyame" tunes={lol2}></Artist>
    </>
  )
}

export default App
