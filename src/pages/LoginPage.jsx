import InputBar from '../components/InputBar.jsx';
import React, { useEffect, useState } from 'react'
import SubmitButton from '../components/SubmitButton.jsx';
import PasswordField from '../components/PasswordField.jsx';

const LoginPage = () => {
    let [formData, setFormData] = useState({ emailAddress: "", password: "" });

    const handleInputChange = (event) => {
        setFormData(currFormData => ({ ...currFormData, [event.target.name]: event.target.value }))
    }

    const handleSubmitDetails = (event) => {
        event.preventDefault();
        if (formData.emailAddress.trim() != "" && formData.password.trim() != "") {
            setFormData({ emailAddress: "", password: "" })
        }
    }

    useEffect(() => {
        document.body.className += " flex justify-center items-center";
    }, [])

    return (
        <div className='flex flex-col items-center justify-center gap-6 px-12 py-20 rounded-md bg-slate-100 border-black shadow-gray-500 shadow-lg'>
            <h1 className='text-2xl'>Log in</h1>

            <form className='flex flex-col justify-center items-center space-y-3'>
                <InputBar labelName={"Email address"} forVal={"email-address"} typeVal={'text'} idVal={"email-address"} nameVal={"emailAddress"} value={formData.emailAddress} handleChange={handleInputChange} />
                <PasswordField labelName={"Password"} forVal={"password"} typeVal={'password'} idVal={"password"} nameVal={"password"} value={formData.password} handleChange={handleInputChange} />
                <button onClick={e => e.preventDefault()} className='hover:underline text-right cursor-pointer text-[.8rem] font-semibold w-full'>forgot your password?</button>
                <SubmitButton handleSubmit={handleSubmitDetails} message={"Log in"} />
            </form>

            <p className='text-[0.8rem]'>Don't have an account? <button className='underline font-bold'>Sign up</button></p>
        </div>
    )
}

export default LoginPage;
