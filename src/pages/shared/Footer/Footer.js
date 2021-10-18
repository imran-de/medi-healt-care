import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />

            <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                    {/* <!-- Col-1 --> */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Getting Started
                        </div>

                        {/* <!-- Links --> */}
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Installation
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Release Notes
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Upgrade Guide
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Using with Pre processors
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Optimizing for Production
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Browser Support
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            IntelliSense
                        </a>
                    </div>

                    {/* <!-- Col-2 --> */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Core Concepts
                        </div>

                        {/* <!-- Links --> */}
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Utility-First
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Responsive Design
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Hover, Focus, & Other States
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Dark Mode
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Adding Base Styles
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Extracting Components
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Adding New Utilities
                        </a>
                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Customization
                        </div>

                        {/* <!-- Links --> */}
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Configuration
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Theme Configuration
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Breakpoints
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Customizing Colors
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Customizing Spacing
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Configuring Variants
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Plugins
                        </a>
                    </div>

                    {/* <!-- Col-3 --> */}
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Community
                        </div>

                        {/* <!-- Links --> */}
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            GitHub
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Discord
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Twitter
                        </a>
                        <a href="#home" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            YouTube
                        </a>
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