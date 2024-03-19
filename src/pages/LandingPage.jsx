import React from 'react'
import NavBar from '../components/NavBar'
import likeIMG from '../assets/images/likeIMG.png'

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <img src={likeIMG} alt="likeIMG"/>
    </div>
  )
}
