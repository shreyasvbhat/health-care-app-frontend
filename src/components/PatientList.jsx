import React from 'react'

const PatientList = ({ PatientDet }) => {
    return (
        <div className='flex flex-col items-center'>
            {PatientDet.map((info) => (
                <div>
                    <div className='flex justify-between items-center bg-blue-300 w-[70vw] px-2 py-2 rounded-lg'>
                        <img className='w-[80px] h-[80px] rounded-[50%] object-cover' src={info.ima}></img>
                        <div className='flex-col'>
                            <h1>{info.name}</h1>
                            <p>{info.gender}, {info.age} years old</p>
                        </div>
                        <button>View</button>
                    </div>
                    <br></br>
                </div>
            ))}
        </div>
    )
}

PatientList.defaultProps = {
    PatientDet: [{
        ima: './profile2.jpg',
        name: "Rahul",
        gender: "Male",
        age: "29",
    },
    {
        ima: './profile3.jpeg',
        name: "Shruthi",
        gender: "Female",
        age: "25",
    }
    ]
}

export default PatientList
