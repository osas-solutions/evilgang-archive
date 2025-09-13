import { useEffect, useState, type ReactElement } from "react";
import Artist from "./Artist"
import type Song from "./SongInterface";

function App() {
  let [artists, setArtists] = useState<ReactElement[]>();

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
    });
  }, []);

  return (
    <>
      <h1>evilgang archives</h1>
      <div className="notice">
        <a>important: please do not link directly to the files as the urls WILL change!</a>
        <br></br>
        <a className="important">for takedowns/complains please email EMAIL@DOMAIN.COM</a>
        <br></br>
        <a>more coming soon if i can be bothered</a>
      </div>
      <hr></hr>
      <div className="artistslist">
        {artists || <h1>loading boss please wait (probably broken idk)</h1>}
      </div>
    </>
  )
}

export default App
