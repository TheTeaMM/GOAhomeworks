import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
export default function App() {
  const boxRef = useRef(null)
  const textRef = useRef(null)
  const textRefs = useRef(null)
  const tl = gsap.timeline({repeat: 0})

  useEffect(() => {
    // ! scene 1
    tl.to(boxRef.current,
      {
        duration: 1,
        x: "50vw",
        xPercent: -50,
        // yoyo: true,
        // repeat: 1,
        ease: "power5.inOut"
      }
    )
    // ! scene 2
    tl.to(boxRef.current, {
      y: "50vh",
      yPercent: -50,
      rotate: 360,
      duration: 1,
    })
    // ! scene 3
    tl.to(boxRef.current,
      {
        // scale: 100,
        width: "100vw",
        height: "100vh",
        duration: .2,
      })
    // ! scene 4
    tl.to(textRef.current,
      {
        delay: 1,
        opacity: 1,
        duration: 2,
        repeat: 0
      }
    )
    tl.to(textRef.current,
      {
        delay: 1,
        opacity: 0,
        duration: 2,
        repeat:0
      }
    )
  }, [])
  return (
    <>
      <div ref={boxRef} className='bg-black size-50 '>
      </div>
      <div className=' absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <h1 ref={textRef} className='opacity-[0] text-lg text-white text-center translate-y-[50%] text-5xl font-semibold'>TIME TO CHANGE COLOR :3</h1>
      </div>
    </>
  )
}