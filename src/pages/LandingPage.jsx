import React from 'react'
import NavBar from '../components/NavBar'
import DocHome from '../assets/doctor_home.png'

export default function LandingPage() {
  return (
    <>
    <NavBar />
    <div className='flex  bg-blue-300'>
      <div>
        <h1 className='text-3xl font-bold text-blue-950'>Your Partner in Health and Wellness</h1>
        <h6>We are committed to providing you with the best medical and</h6>
        <h6> healthcare services to help you live healthier and happier</h6>

      </div>
      <div className='flex-col absolute right-0 space-y-14  bg-blue-300'>
        <img className='absolute right-9' width={40} src='./health.svg' alt='health' />
        <img width={300} src={DocHome}/>      
      </div>

    </div>
  </>
  )
}
