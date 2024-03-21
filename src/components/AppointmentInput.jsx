import React from 'react'

const AppointmentInput = ({ idValue, typeValue, labelName }) => {
    return (
        <div className='flex flex-col gap-1 w-fit'>
            <label htmlFor={idValue} className='ml-4 text-indigo-900 font-[500]'>{labelName}</label>
            <input className='py-2 px-4 rounded-full border-[1px] border-gray-400 w-72' type={typeValue} id={idValue} />
        </div>
    )
}

export default AppointmentInput
