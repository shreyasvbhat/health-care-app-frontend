import React from 'react'
import AppointmentInput from './AppointmentInput'
import Options from './Options'

const AppointmentForm = () => {
    let options = [[
        { value: "Routine Checkup", id: "routine" }, { value: "New Patient Visit", id: "newVisit" }, { value: "Specific Concern", id: "specific" }
    ],
    [
        { value: "Pediatric", id: "pediatric" }, { value: "Obstestrics and Gynecology", id: "gyneco" }, { value: "Cardiology", id: "cardio" }, { value: "Neurology", id: "neuro" }, { value: "Psychiatry", id: "psychiatry" }
    ]]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='py-7'>
            <h2 className='font-semibold text-indigo-900 text-xl'>BOOK AN</h2>
            <h1 className='font-bold text-indigo-900 text-4xl'>Appointment</h1>
            <br /><br />
            <div className='flex justify-between relative'>
                <form className='w-[60vw] flex flex-col gap-7 items-start' onSubmit={e => handleSubmit(e)}>
                    <div className='grid grid-cols-2 justify-items-start gap-y-7 gap-x-10'>
                        <AppointmentInput idValue={"name"} typeValue={"text"} labelName={"Name"} />
                        <AppointmentInput idValue={"phone"} typeValue={"tel"} labelName={"Phone Number"} />
                        <AppointmentInput idValue={"date"} typeValue={"date"} labelName={"Preferred Date"} />
                        <AppointmentInput idValue={"time"} typeValue={"time"} labelName={"Preferred Time"} />
                    </div>
                    <Options options={options[0]} header={"Reason for Visit"} name={"reason"} />
                    <Options options={options[1]} header={"Departments"} name={"dept"} />
                    <button className='bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-800 transition-all duration-[.3s]'>Submit {" >"}</button>
                </form>

                <div>
                    <img width={230} className='drop-shadow-xl mr-5' src="./doctor_appointment.png" alt="doctor-apt" />
                    <img className='rotate-90 absolute top-0 right-0 -z-10 w-[30vw]' src="./bg-style.svg" alt="styles" />
                </div>
            </div>
        </div>
    )
}

export default AppointmentForm;