import React from 'react'
import AppointmentForm from '../components/AppointmentForm';

const AppointmentPage = () => {
    let btnStyles = 'bg-indigo-500 px-5 py-2 rounded-md text-white hover:bg-indigo-700 transition-all duration-[.3s] shadow-lg';

    return (
        <div className='px-12'>
            <img className='w-[30vw] absolute left-[10vw] top-24' src="./bg-style.svg" alt="style-img" />

            <div className='flex flex-col items-center gap-24 border-2 border-dashed border-gray-400 py-24 px-10 w-[70vw] relative top-5 mb-14'>
                <h2 className='font-semibold text-4xl w-full text-left'>Select your preferred Mode:</h2>
                <div className='flex gap-10 relative left-24'>
                    <button className={btnStyles}>Online Mode <br /> video call {">"}</button>
                    <button className={btnStyles + " relative bottom-7"}>Offline Mode <br /> In person {">"}</button>
                </div>
            </div>

            <AppointmentForm />
        </div>
    )
}

export default AppointmentPage
