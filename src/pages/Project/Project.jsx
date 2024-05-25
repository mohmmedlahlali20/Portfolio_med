import React from 'react'
import './Project.css'
import imageElectroNacer  from '../../assets/images/taxi.png'
import  imageEvento from '../../assets/images/image1.png'
import PetsWeb from '../../assets/images/Pets.png'
function Project() {
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
    <div className="bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:text-center">
        <p className=" m-5 leading-6 text-indigo-600 font-semibold tracking-wide uppercase text-3xl">My Projects</p>
         
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
  )
}

export default Project