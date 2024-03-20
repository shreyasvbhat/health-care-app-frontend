import React from 'react'

const DoctorCard = ({ info }) => {
    return (
        <div className='flex flex-col items-center w-[310px] border-[1.3px] bg-gray-200 rounded-lg py-4 px-7 gap-2'>
            <img className='h-[150px] w-[220px] border-[1px] border-black rounded-2xl bg-blue-200' src={info.imgSrc} alt="doctor-profile" />
            <div className='flex items-center gap-4 justify-center'>
                <div>
                    <p className='text-[1.2rem] text-center'>{info.name}</p>
                    <p className='text-[.9rem]'>{info.role}</p>
                </div>

                <button className='bg-blue-600 text-white py-1 px-3 rounded-md'>View Profile</button>
            </div>
        </div>
    )
}

DoctorCard.defaultProps = {
    info: {
        name: "Doctor Name",
        role: "Department",
        imgSrc: "./profile.svg"
    }
}

export default DoctorCard
