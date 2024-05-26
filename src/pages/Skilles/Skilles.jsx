import React from 'react';
import './Skilles.css'

const Skills = () => {
    return (
        <div className="min-h-screen flex items-center justify-between bg-gradient-to-r from-gray-800 via-indigo-500 to-yellow-500">
            <div className="relative w-1/4 h-64 flex items-center justify-center">
                <div className="moon animate-fadeInUp"></div>
            </div>
            <div className="w-1/2 skills-carousel">
                <div className="card">
                    <span className="title">All Skilles</span>
                    <div className="card__tags">
                        <ul className="tag">
                            <li className="tag__name">JavaScript</li>
                            <li className="tag__name">Html</li>
                            <li className="tag__name">css</li>
                            <li className="tag__name">PHP</li>
                            <li className="tag__name">ReactJs</li>
                            <li className="tag__name">ubuntu</li>
                            <li className="tag__name">laravel</li>
                            <li className="tag__name">MySQL</li>
                            <li className="tag__name">Figma</li>
                            <li className="tag__name">Bootstrap</li>
                            <li className="tag__name">Tailwind</li>
                            <li className="tag__name">Postman</li>
                            <li className="tag__name">PostgrSQL</li>
                            <li className="tag__name">Docker</li>
                            <li className="tag__name">Jquery</li>
                            <li className="tag__name">Trello</li>
                            <li className="tag__name">Jira</li>
                            <li className="tag__name">Sass (css)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative w-1/4 h-64 flex items-center justify-center">
                <div className="sun animate-fadeInUp"></div>
            </div>
        </div>
    );
};

export default Skills;
