import React from 'react'

const SubmitButton = ({message, handleSubmit}) => {
    return (
        <div>
            <button onClick={e => handleSubmit(e)} className='py-2 px-24 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm shadow-gray-400'>{message}</button>
        </div>
    )
}

export default SubmitButton
