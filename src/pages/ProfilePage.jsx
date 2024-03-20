import React from 'react'
import NavBar from '../components/NavBar.jsx'
import ProfileDetails from '../components/ProfileDetails.jsx'
import Departments from '../components/Departments.jsx'
import DoctorsList from '../components/DoctorsList.jsx'

const ProfilePage = () => {
    return (
        <div>
            <NavBar />
            <ProfileDetails username={"Username"} email={"Email Address"} />
            <hr className='border-gray-400 border-[1.3px]' />
            <Departments />
            <hr className='border-gray-400 border-[1.3px]' />
            <DoctorsList />
        </div>
    )
}

export default ProfilePage;
