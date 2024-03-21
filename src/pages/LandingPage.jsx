import React, { useEffect } from 'react'

export default function LandingPage() {
  useEffect(() => {
    document.querySelector("main").classList = "px-0 pt-[60px]"
  }, [])

  return (
    <div>
      <div className='absolute top-4 left-4 w-1/3 -z-[3] h-fit'>
        <img src="./honeycomb.svg" alt="style" />
      </div>

      <div className='bg-gradient-to-tl from-slate-300 bg-blue-400 relative -z-[5] p-0 space-y-3 pt-2 mb-4 shadow-md'>
        <div className='flex justify-end pr-3'>
          <img width={50} src="./health.svg" alt="health-care" />
        </div>

        <div className='flex justify-between items-center pl-16'>
          <div className='w-[35rem] space-y-6'>
            <h1 className='font-bold text-4xl text-blue-900'>Your Partner in <br /> Health and Wellness</h1>
            <p className='text-[1rem] text-blue-900 font-semibold'>We are committed to providing you with the best medical and healthcare services to help you live healthier and happier</p>
            <button className='bg-blue-700 hover:bg-blue-800 px-8 py-2 rounded-lg text-white'>Get Started {">"}</button>
          </div>

          <img width={400} src="doctor_home.png" alt="doctors" />
        </div>
      </div>

      <div className='flex justify-center mt-14'>
        <img draggable={false} className='w-[75vw]' src="./about.svg" alt="about" />
      </div>
    </div>
  )
}
