import type Song from "./SongInterface"
import './Song.css'

function SongElement(props: Song) {
  return (
    <div className="song">
      <a download className="m4a download" href={'data/audio/'+props.m4a}>.m4a</a>
      <a download className="mp3 download" href={'data/audio/'+props.mp3}>.mp3</a>
      <a></a>
      <a className="name">"{props.name}"</a>
    </div>
  )
}

export default SongElement
