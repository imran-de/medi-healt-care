import React from 'react';

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
                        <div className="">
                            Getting Started
                        </div>

                        {/* <!-- Links --> */}

                    </div>

                    {/* <!-- Col-2 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <div className="">
                            Core Concepts
                        </div>

                        {/* <!-- Links --> */}

                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <div className="">
                            Customization
                        </div>

                        {/* <!-- Links --> */}

                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="col-md-3">
                        {/* <!-- Col Title --> */}
                        <div className="">
                            Community
                        </div>

                        {/* <!-- Links --> */}

                    </div>
                </div>

                {/* <!-- Copyright Bar --> */}
                <div className="pt-2">
                    <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
                        <div className="mt-2">
                            © Copyright 1998-year. All Rights Reserved.
                        </div>

                        {/* <!-- Required Un icons (if you want) --> */}
                        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
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