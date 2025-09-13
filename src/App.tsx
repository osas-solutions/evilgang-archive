import { useEffect, useState, type ReactElement } from "react";
import Artist from "./Artist"
import type Song from "./SongInterface"

function App() {

  let [artists, setArtists] = useState<ReactElement[]>();

  // let artists: ReactElement[] = [];

  useEffect(() => {
    fetch("data/data.json").then(async (resp) => {
      let lol: ReactElement[] = [];

      const data = await resp.json();

      for(const lol2 of data) {
        // console.log(lol2);
        lol.push(<Artist username={lol2.username} displayname={lol2.displayname} tunes={[]}></Artist>)
      }

      setArtists(lol);
      // artists.push(<h1>Yo</h1>)
    });
  }, []);

  return (
    <>
      <h1>EEEEVILLL GANGGGGG ARRRCHIVVVESS</h1>
      <hr></hr>
      {artists || <h1>loading boss please wait (probably broken idk)</h1>}
    </>
  )
}

export default App
