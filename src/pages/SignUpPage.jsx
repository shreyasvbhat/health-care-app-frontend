import React, { useEffect, useState } from 'react'
import InputBar from '../components/InputBar.jsx';
import PasswordField from '../components/PasswordField.jsx';
import SubmitButton from '../components/SubmitButton.jsx';
import { isValidData } from '../components/HelperFunctions.js';
import CheckBox from '../components/CheckBox.jsx';

const SignUpPage = () => {
    let [formData, setFormData] = useState({ emailAddress: "", password: "", countryName: "" });
    let [checkedOption, setCheckedOption] = useState("patient");

    const handleInputChange = (event) => {
        setFormData(currFormData => ({ ...currFormData, [event.target.name]: event.target.value }))
    }

    const handleSubmitDetails = (event) => {
        event.preventDefault();
        if (isValidData(formData)) {
            setFormData({ emailAddress: "", password: "", countryName: "", areaName: "" })
        }
    }

    const handleChecked = (event) => {
        event.target.checked = (event.target.name === checkedOption)
    }

    useEffect(() => {
        document.body.className += " flex justify-center items-center";
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-3 px-12 py-14 rounded-md bg-slate-100 border-black shadow-gray-500 shadow-lg transition-all duration-[.5s]'>
            <div className='flex flex-col gap-1 items-center'>
                <h1 className='text-2xl'>Create an Account</h1>
                <p className='text-[0.8rem]'>Already have an account? <button className='underline font-bold'>Log in</button></p>

                <div className='flex gap-4 text-[0.8rem]'>
                    <CheckBox value={"As Patient"} nameAtt={"patient"} idAtt={"patient"} handler={handleChecked} setter={setCheckedOption} checkedOption={checkedOption} />
                    <CheckBox value={"As Doctor"} nameAtt={"doctor"} idAtt={"doctor"} handler={handleChecked} setter={setCheckedOption} checkedOption={checkedOption} />
                </div>
            </div>

            <form className='flex flex-col justify-center items-center space-y-2 transition-all duration-1000'>
                <InputBar labelName={"Email address / Phone Number"} forVal={"email-address"} typeVal={'text'} idVal={"email-address"} nameVal={"emailAddress"} value={formData.emailAddress} handleChange={handleInputChange} />
                <PasswordField labelName={"Password"} forVal={"password"} typeVal={'password'} idVal={"password"} nameVal={"password"} value={formData.password} handleChange={handleInputChange} />
                <InputBar labelName={"Country of Residence"} forVal={"country"} typeVal={'text'} idVal={"country"} nameVal={"countryName"} value={formData.countryName} handleChange={handleInputChange} />
                {checkedOption === "doctor" && <InputBar labelName={"Area in which you are specialist"} forVal={"area"} typeVal={'text'} idVal={"area"} nameVal={"areaName"} value={formData.areaName} handleChange={handleInputChange} />}
                <SubmitButton handleSubmit={handleSubmitDetails} message={"Create an Account"} />
            </form>
        </div>
    )
}

export default SignUpPage
