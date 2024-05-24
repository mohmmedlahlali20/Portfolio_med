import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import imageElectroNacer  from '../Project/Project-img/taxi.png'
import  imageEvento from '../Project/Project-img/image1.png'
import PetsWeb from '../Project/Project-img/Pets.png'
function Home() {
    const projects = [
        {
            id: 1,
            title: <span>MonGrandTaxi <strong>Plateforme de Réservation de Grands Taxis</strong></span>,
            description: <span> développer une plateforme de réservation de grands taxis, permettant aux utilisateurs de trouver des chauffeurs disponibles pour des trajets spécifiques, et aux chauffeurs de publier leurs disponibilités using <strong> laravel , CSS , tailwind , HTML , MySQl , js</strong></span>,
            image: imageElectroNacer,
            link: 'https://github.com/mohmmedlahlali20/taksiKbir.git',
        },
        {
            id: 2,
            title: <span>Evento <strong>places d'événements</strong></span>,
            description: <span>L'objectif est de fournir une expérience utilisateur optimale aux participants, organisateurs et administrateurs. Cette plateforme permettra aux utilisateurs de découvrir, réserver et générer des tickets pour une variété d'événements, tandis que les organisateurs auront la possibilité de créer et de gérer leurs propres événements. <strong>laravel , blade , MySQL , JS</strong></span>,
            image: imageEvento,
            link: 'https://github.com/mohmmedlahlali20/Eventoo.git',
        },
        {
            id: 3,
            title: <span>PetsWeb <strong>Site E-commmerce</strong></span>,
            description: <span>Ce projet consiste en une simple page web permettant aux utilisateurs de s'inscrire pour être informés de l'ouverture du site web e-commerce Pets, spécialisé dans les produits pour animaux de compagnie. using <strong>Laravel , Blade , Botstrap , css , js , MySQL</strong></span>,
            image: PetsWeb,
            link: 'https://github.com/mohmmedlahlali20/PetsWeb.git',
        },
    ];


    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
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
                                        to="/projects"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        View Projects
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="/contact"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

            {/* About Section */}
            <div className="py-12 bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">About Me</p>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            I'm a passionate developer
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 dark:text-gray-300 lg:mx-auto">
                            As a Full Stack Developer, I thrive on crafting cutting-edge solutions that push the boundaries of innovation. My skill set encompasses a wide array of technologies, including HTML, CSS, JavaScript, PHP, MySQL, React, Laravel, Ubuntu, and Docker. Whether it's designing responsive and intuitive user interfaces with HTML and CSS, implementing dynamic functionality with JavaScript, architecting robust backend systems with PHP and Laravel, optimizing database performance with MySQL, or deploying scalable applications with Docker on Ubuntu servers, I'm equipped to tackle any challenge. With a relentless passion for problem-solving and a commitment to excellence, I'm eager to collaborate and build something truly remarkable together. Let's bring our ideas to life and create extraordinary digital experiences that make a lasting impact.                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">My Projects</p>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Check out my latest work
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 dark:text-gray-300 lg:mx-auto">
                        Here are a few projects I've been working on lately. Click on each to learn more.
                    </p>
                    <div className="mt-10">
                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                                    <img
                                        className="w-full h-48 object-cover object-center"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                                        <a
                                            href={project.link}
                                            className="mt-4 inline-block bg-indigo-500 text-white rounded-full px-3 py-1 text-sm font-semibold tracking-wide uppercase"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* Contact Section */}
            <div id="contact" className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:text-center">
                        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Contact Me</p>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Get in touch
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 dark:text-gray-300 lg:mx-auto">
                            Have a question or want to work together? Feel free to reach out.
                        </p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-block bg-indigo-500 text-white rounded-full px-6 py-3 text-lg font-semibold hover:bg-indigo-600"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
