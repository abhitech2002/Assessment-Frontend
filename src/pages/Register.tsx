import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import SignupImage from '../images/Signup.png';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    userName: string;
    password: string;
    repassword: string;
    termsAndConditions: boolean;
}

const Register: React.FC<{}> = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        userName: '',
        password: '',
        repassword: '',
        termsAndConditions: false
    });

    const { firstName, lastName, email, location, userName, password, repassword, termsAndConditions } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="grid grid-cols-2 gap-4">    
                    <div className="col-span-1 flex flex-col justify-center w-full items-center">
                        <h1 className="text-3xl font-semibold h-9 text-[#4B0082] mb-2 mr-80">
                            Sign Up
                        </h1>
                        <p className="text-[#9D9D9D] font-medium mb-8 mr-80 ml-10">
                            Connect & Collect...!
                        </p>
                        <form onSubmit={onSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md items-center">
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                            <FontAwesomeIcon icon={faAt} className='text-white' />
                                        </div>
                                        <input
                                            type="text"
                                            id='firstName'
                                            name='firstName'
                                            value={firstName}
                                            placeholder='First Name'
                                            onChange={onChange}
                                            className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                            <FontAwesomeIcon icon={faAt} className='text-white' />
                                        </div>
                                        <input
                                            type="text"
                                            id='lastName'
                                            name='lastName'
                                            value={lastName}
                                            placeholder='Last Name'
                                            onChange={onChange}
                                            className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                        <FontAwesomeIcon icon={faAt} className='text-white' />
                                    </div>
                                    <input
                                        type="text"
                                        id='email'
                                        name='email'
                                        value={email}
                                        placeholder='Email'
                                        onChange={onChange}
                                        className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                        <FontAwesomeIcon icon={faAt} className='text-white' />
                                    </div>
                                    <input
                                        type="text"
                                        id='location'
                                        name='location'
                                        value={location}
                                        placeholder='Location'
                                        onChange={onChange}
                                        className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                        <FontAwesomeIcon icon={faAt} className='text-white' />
                                    </div>
                                    <input
                                        type="text"
                                        id='userName'
                                        name='userName'
                                        value={userName}
                                        placeholder='UserName'
                                        onChange={onChange}
                                        className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4"> {/* Password and re-enter password */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                            <FontAwesomeIcon icon={faLock} className='text-white' />
                                        </div>
                                        <input
                                            type="password"
                                            id='password'
                                            name='password'
                                            value={password}
                                            placeholder='Password'
                                            onChange={onChange}
                                            className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                                            <FontAwesomeIcon icon={faLock} className='text-white' />
                                        </div>
                                        <input
                                            type="password"
                                            id='repassword'
                                            name='repassword'
                                            value={repassword}
                                            placeholder='Re-enter'
                                            onChange={onChange}
                                            className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="termsAndConditions"
                                    name="termsAndConditions"
                                    checked={termsAndConditions}
                                    onChange={() => setFormData({ ...formData, termsAndConditions: !termsAndConditions })}
                                    className="mr-2"
                                />
                                <label htmlFor="termsAndConditions" className="text-gray-600">Accept Terms & Conditions. <Link to="#" className="text-violet-600">Click Here</Link></label>
                            </div>
                            <div className="flex items-center justify-center">
                                <button type='submit' className="bg-[#4B0082] hover:bg-[#4c0082d5] text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={!termsAndConditions}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="text-center mb-4">
                            <p>Already a member of Denaurlen? <Link to="/login" className="text-[#4B0082]">Sign in</Link></p>
                        </div>
                        <footer className="text-center py-4">
                            <p className="text-[#4B0082]">Privacy Policy</p>
                            <p>Denaurlen Copyright @ 2021, All Rights Reserved</p>
                        </footer>
                    </div>
                    <div className="col-span-1 flex flex-col bg-gray-200 -m-0"> {/* Right side container */}
                        <div className="p-4 rounded-t-lg ml-5">
                            <h1 className="text-3xl font-semibold text-[#4B0082] h-11">Denaurlen</h1>
                            <p className="text-lg text-[#343434] font-medium h-8">Every dream has a demand..!</p>
                        </div>
                        <img src={SignupImage} alt="Signup" className="w-full h-full rounded-b-lg" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register