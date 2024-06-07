import React from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import './Home.css';
// import image from '../../assets/images/me.jpg'

function Home() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <Slide direction="left">
                                    <div className="sm:flex sm:items-center sm:justify-between">
                                        <div className="sm:mr-4">
                                            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                                <span className="block xl:inline">Welcome to my portfolio</span>{' '}
                                                <span className="block text-indigo-600 xl:inline">web-site</span>
                                            </h1>
                                            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                                This is where I showcase my projects, skills, and more.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">

                                            <Link
                                                to="/about"
                                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                            >
                                                About ME
                                            </Link>

                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </main>
                    </div>
                </div>

            </div>

            {/* Projects Section */}
            <div className='container mx-auto mt-5 bg-white p-5'>
                <Fade direction="up">
                    <div className='w-full h-full bg-gray-200 flex flex-col justify-center items-center text-center p-5 rounded-lg'>
                        <h2 className='text-xl font-bold mb-5'>Show Project</h2>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Check out my latest work
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 dark:text-gray-300 lg:mx-auto m-8">
                            Here are a few projects I've been working on lately. Click on each to learn more.
                        </p>
                        <Link to='/Project' className='button flex items-center justify-center cursor-pointer font-bold font-sans transition-all duration-200 px-5 py-2.5 rounded-full bg-yellow-400 border border-transparent hover:bg-yellow-500 active:scale-95'>
                            <span>Project</span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1'>
                                <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                            </svg>
                        </Link>
                    </div>
                </Fade>
            </div>

            {/* Contact Section */}
            <div id="contact" className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:text-center">
                        <Slide direction="right">
                            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Contact Me</p>
                            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Get in touch
                            </h2>
                            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 dark:text-gray-300 lg:mx-auto">
                                Have a question or want to work together? Feel free to reach out.
                            </p>
                            <div className="mt-6">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-indigo-500 text-white rounded-full px-6 py-3 text-lg font-semibold hover:bg-indigo-600"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
