import React, { useEffect } from 'react'

import Forza from "../assets/videos/fr5.mp4"
import Spider from "../assets/videos/sp2.mp4"

import {useVideo} from 'react-use';

export default function Hero() {
    useEffect(() => {
        setInterval(() =>{
            setvideoElement
        })
        const [videoElement, setVideoElement] = useState(gta)

        setInterval(() => {

        }, 500);
    })
    const [video, state, controls, ref] = useVideo(
        <video src={gow} autoPlay loop muted className='z-[-2] absolute top-0 left-0 w-full h-full object-cover' />)
    return (
    <div className='h-screen'>
     <div className=''>
      {video}
      <h1 className='text-[100px] text-blue-500 font-bold max-w-[900px] '>GAME SERIES OF PLAYSTATION</h1>
      </div>
    </div>
  )
}