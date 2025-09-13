import { useEffect, useState, type ReactElement } from "react";
import Artist from "./Artist"
import type Song from "./SongInterface";

function App() {

  let [artists, setArtists] = useState<ReactElement[]>();

  // let artists: ReactElement[] = [];

  useEffect(() => {
    fetch("data/data.json").then(async (resp) => {
      let lol: ReactElement[] = [];

      const data = await resp.json();

      for(const artist of data) {
        let tunes: Song[] = [];
        for(const tune of artist.tunes) {
          tunes.push({name: tune.name, m4a: tune.m4a, mp3: tune.mp3});
        }
        lol.push(<Artist username={artist.username} displayname={artist.displayname} tunes={tunes}></Artist>)
      }

      setArtists(lol);
      // artists.push(<h1>Yo</h1>)
    });
  }, []);

  return (
    <>
      <h1>evilgang archives</h1>
      <hr></hr>
      <div className="artistslist">
        {artists || <h1>loading boss please wait (probably broken idk)</h1>}
      </div>
    </>
  )
}

export default App
