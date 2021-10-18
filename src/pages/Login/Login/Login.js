import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
// from react form hook
import { useForm } from "react-hook-form";

const Login = () => {
    const { signInWithGoogle, msg, logInWithEmailAndPassword, user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        logInWithEmailAndPassword(data)
        console.log(data);
    };
    console.log(user);
    return (
        <main className='bg-gray-200 m-0 p-0'>
            <Header></Header>
            {/* Login with email and password */}

            <div className="bg-white sm:bg-gray-200 min-h-screen flex flex-col justify-center items-center">
                <div className="bg-white shadow-none sm:shadow-lg px-8 sm:px-12 w-full xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
                    <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
                        LOGIN
                    </div>
                    <div className="w-full bg-gray-200 my-3" style={{ height: '1px' }}></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4 px-0 py-4">
                            <h2 className='text-red-600'>{msg}</h2>
                            <div>
                                <label className="text-gray-700">Email address</label>
                                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input
                                    className="py-2 pl-10 border border-gray-200 w-full"
                                    placeholder="Email address"
                                    type="email"
                                    defaultValue="" {...register("email", { required: true })}
                                />
                            </div>
                            <div>
                                <label className="text-gray-700">Password</label>
                                {/* <!-- <LockClosedIcon className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> --> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input
                                    className="py-2 pl-10 border border-gray-200 w-full"
                                    placeholder="Password"
                                    type="password"
                                    defaultValue="" {...register("pass", { required: true })}
                                />
                                <p className="text-xs italic text-red-500">{errors.pass && "Password is must"}</p>
                            </div>
                            <div className="w-full flex flex-row gap-2">
                                <button
                                    className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                                    type="submit"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg> Login
                                </button>
                                <Link to='/registration' className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-2 flex flex-row justify-center items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg> Sign-up
                                </Link>
                            </div>
                            <div className="my-2 flex flex-row justify-center">
                                <span className="absolute bg-white px-4">or</span>
                                <div
                                    className="w-full bg-gray-200 mt-3" style={{ height: '1px' }}
                                ></div>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <button onClick={signInWithGoogle} className="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                                    <i className="fab fa-google"></i>
                                    Sign-in with Google
                                </button>
                                <button className="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out">
                                    <i className="fab fa-facebook-square"></i>
                                    Sign-in with Facebook
                                </button>
                                <button className="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-gray-800 duration-100 ease-in-out">
                                    <i className="fab fa-github"></i>
                                    Sign-in with Github
                                </button>
                            </div>
                            <div className="w-full flex flex-row justify-end">
                                <a href="#forget">Forgot password</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
};

export default Login;