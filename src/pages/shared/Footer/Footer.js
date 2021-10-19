import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />

            <footer className="bg-dark text-light p-lg-5">
                <div className="container row">
                    {/* <!-- Col-1 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="">
                            Get In Touch
                        </h2>

                        <div className="pt-4">
                            <p>House: 06, Road: 08, Khadim, Sylhet</p>
                            <p>Phone: +8801926-294263</p>
                            <p>Email: stimran4405@gmail.com</p>
                        </div>

                    </div>

                    {/* <!-- Col-2 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="">
                            Quick Links
                        </h2>

                        <div className="pt-4">
                            <ul class="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="">
                            News
                        </h2>

                        <div className="">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark text-light border-bottom border-light">News Title</li>
                                <li className="list-group-item bg-dark text-light border-bottom border-light">News Title</li>
                                <li className="list-group-item bg-dark text-light border-bottom border-light">News Title</li>
                                <li className="list-group-item bg-dark text-light border-bottom border-light">News Title</li>
                                <li className="list-group-item bg-dark text-light border-bottom border-light">News Title</li>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <h2 className="">
                            Download Apps
                        </h2>
                        <div className="pt-4 text-center">
                            <img className="w-100" src="https://instabridge.com/wp-content/themes/ib17/assets/img/badges/google-play-badge-en.svg" alt="" /><br /><br />
                            <img src="https://instabridge.com/wp-content/themes/ib17/assets/img/badges/app-store-badge-en.svg" className="w-100" alt="" />
                        </div>

                    </div>
                </div>

                {/* <!-- Copyright Bar --> */}
                <div className="pt-2">
                    <div className="">
                        <div className="mt-2">
                            ©Medi-health Care Copyright 1996-2021. All Rights Reserved. Developed by <span className="text-info">S Imran Ahmed ST</span>
                        </div>

                        {/* <!-- Required Un icons (if you want) --> */}
                        <div className="mt-3">
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-facebook-f"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-youtube"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a href="#home" className="w-6 mx-1">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;