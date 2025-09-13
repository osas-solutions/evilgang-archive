import type Song from "./SongInterface"
import './Artist.css'
import { useState, type ReactElement } from "react"
import SongElement from "./SongElement";

interface ArtistData {
    username: string,
    displayname: string,
    tunes: Song[]
}

function Artist(props: ArtistData) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open)
  };

  const tracklist: ReactElement[] = [];
  for(const tune of props.tunes) {
    tracklist.push(<SongElement name={tune.name} mp3={tune.mp3} m4a={tune.m4a}></SongElement>);
  }

  return (
    <div className="artist">
      <a className="username">"{props.username}"</a>
      <br></br>
      <a className="displayname">{props.displayname}</a>
      <br></br>
      <a className="songsbutton" onClick={toggleOpen}>{props.tunes.length} tracks {open ? "v" : ">"}</a>
      <div className="tracks">
        {open && tracklist}
      </div>
    </div>
  )
}

export default Artist
