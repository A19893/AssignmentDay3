import React,{useState,useRef} from 'react'
import Display from './Display'
import Songs from "../Data/tracks.json"
const AudioPlayer = () => {
  const[currentTrack,setCurrentTrack]=useState(Songs);
  const audioRef = useRef();
  return (
    <>
    {console.log(Songs)}
    <Display id={0} currentTrack={Songs} audioRef={audioRef} />
    </>
  )
}

export default AudioPlayer