import type { AriaAttributes } from "react"
import type Song from "./SongInterface"

interface ArtistData {
    username: string,
    displayname: string,
    tunes: Song[]
}

function Artist(props: ArtistData) {
  return (
    <>
      <h1>{props.username}</h1>
      <h1>{props.displayname}</h1>
    </>
  )
}

export default Artist
