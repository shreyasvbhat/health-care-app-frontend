import React, { useEffect } from 'react'
import DetailsCard from '../components/DetailsCard';

const DoctorDetailsPage = ({ doctorName, about, workingHours }) => {
    let data = [
        { iconName: "user-group", achivements: "7,500+", value: "Patients" },
        { iconName: "briefcase", achivements: "10+", value: "Years Exp." },
        { iconName: "star", achivements: "4.9+", value: "Ratings" },
        { iconName: "comment-dots", achivements: "4,956", value: "Review" }
    ];

    useEffect(() => {
        document.querySelector("main").classList = "px-0 pt-[60px]";
    }, []);

    return (
        <div className='flex flex-col gap-8'>
            <h2 className='font-[400] text-2xl mt-5 pl-8'>{doctorName}</h2>
            <img className='absolute right-0 top-16 w-80' src="./doctor_dash.png" alt="doctor-dash" />

            <div className='flex flex-col gap-9'>
                <div className='bg-gradient-to-l from-indigo-500 to-sky-400 py-12 px-14 flex gap-10'>
                    <div className='flex flex-col gap-7 items-start'>
                        <h1 className='text-4xl font-bold text-white'>Don't Let Your Health <br />Take a Backseat!</h1>
                        <p className='font-semibold text-[1.1rem] text-blue-950'>Scheduled an appointment with one of our <br />exprerienced medical professional today!</p>
                        <button className='bg-blue-700 py-2 px-9 rounded-lg text-white hover:bg-blue-800 transition-all duration-300'>Book Now {">"}</button>
                    </div>

                    <img draggable="false" src="./honeycomb.svg" alt="honeycomb" />
                </div>

                <div className='flex w-[70vw] justify-around ml-5 border-l-4 border-r-4 border-blue-400 bg-white py-6'>
                    {data.map(info => <DetailsCard iconName={info.iconName} achievements={info.achivements} value={info.value} />)}
                </div>
            </div>

            <div>
                <h2 className='px-7 my-4 font-semibold text-3xl'>ABOUT</h2>
                <p className='w-[70vw] ml-7 text-[1.2rem] text-justify'>{about}</p>
            </div>

            <div>
                <h2 className='px-7 my-4 font-semibold text-3xl'>Working Hours:</h2>
                <div className='ml-7 space-y-1'>
                    {workingHours.map(time => {
                        let key = Object.keys(time)[0];

                        return (
                            <div className='flex w-[300px] justify-between'>
                                <p className='font-semibold text-[1.2rem]'>{key}:</p>
                                <p>{time[key].from} - {time[key].to}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

DoctorDetailsPage.defaultProps = {
    doctorName: "Selected Doctor's Name Here",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet pariatur consectetur ipsa, eum expedita mollitia quas exercitationem quaerat assumenda praesentium magni iste fuga ducimus doloremque similique sequi voluptate cum nisi aliquam eligendi? Officia, culpa. Aperiam ratione quidem dignissimos, magnam deserunt sed debitis assumenda at laborum iste in quis a nihil soluta architecto quibusdam quae ipsa culpa doloremque necessitatibus. Dolores autem placeat sed nam saepe quo. Facilis iusto dolor pariatur! Inventore eveniet consequatur error iusto deserunt aperiam laudantium natus temporibus maxime possimus quibusdam libero accusantium, repudiandae excepturi reiciendis est? Dolores consectetur quia ad ipsam sequi dicta necessitatibus odit beatae praesentium.",
    workingHours: [
        { "Sunday": { from: "00:00", to: "00:00" } },
        { "Monday": { from: "00:00", to: "00:00" } },
        { "Tuesday": { from: "00:00", to: "00:00" } },
        { "Wednesday": { from: "00:00", to: "00:00" } },
        { "Thursday": { from: "00:00", to: "00:00" } },
        { "Friday": { from: "00:00", to: "00:00" } },
        { "Saturday": { from: "00:00", to: "00:00" } },
    ]
}

export default DoctorDetailsPage
