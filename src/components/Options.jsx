import React from 'react'

const Options = ({ options, header, name }) => {
    return (
        <div className='space-y-2'>
            <h2 className='text-indigo-900 font-[500] text-[1.1rem]'>{header}</h2>
            <div className='flex gap-5'>
                {options.map(option => (
                    <div className='flex gap-2'>
                        <input className='cursor-pointer' type="radio" id={option.id} name={name} />
                        <label className='cursor-pointer text-indigo-800 font-[400] text-[.9rem]' htmlFor={option.id}>{option.value}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

Options.defaultProps = {
    options: [
        {
            value: "Routine Checkup",
            id: "routine"
        },
        {
            value: "Routine Checkup",
            id: "routine"
        }
    ]
}

export default Options
