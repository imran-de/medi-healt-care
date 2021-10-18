import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
// from react form hook
import { useForm } from "react-hook-form";

const Registration = () => {

    const { signInWithGoogle, makeUserWithEmailAndPassword, msg } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        makeUserWithEmailAndPassword(data)
    };
    return (
        <div className="font-mono bg-gray-200 m-0 p-0">
            <Header></Header>
            {/* <!-- registration form --> */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* <!-- Row --> */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* <!-- Col --> */}
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80')" }}
                        ></div>
                        {/* <!-- Col --> */}
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <h2 className='text-red-600'>{msg}</h2>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        defaultValue="Name" {...register("fullName")}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        defaultValue="" {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            defaultValue="" {...register("pass1", { required: true })}
                                        />

                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                            defaultValue="" {...register("pass2", { required: true })}
                                        />
                                        <p className="text-xs italic text-red-500">{errors.pass1 === errors.pass2 ? "Password must be same those two field" : ''}</p>
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to="/login"
                                    >
                                        Already have an account? Login!
                                    </Link>
                                </div>
                                <div className="my-4 flex flex-row justify-center">
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;