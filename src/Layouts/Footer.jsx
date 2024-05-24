import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p>&copy; 2024 Mohammed LAHLALI. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/mohmmedlahlali20"
                            className="text-white hover:text-gray-400 flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="h-5 w-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.171 6.839 9.491.5.09.686-.217.686-.482 0-.237-.008-.866-.013-1.7-2.787.604-3.37-1.344-3.37-1.344-.454-1.153-1.108-1.46-1.108-1.46-.906-.618.068-.605.068-.605 1.003.07 1.531 1.03 1.531 1.03.892 1.526 2.34 1.085 2.912.828.09-.644.35-1.085.635-1.335-2.22-.253-4.555-1.11-4.555-4.938 0-1.09.39-1.984 1.03-2.68-.104-.254-.448-1.27.098-2.647 0 0 .84-.268 2.75 1.025.8-.223 1.654-.334 2.506-.338.85.004 1.705.115 2.506.338 1.91-1.293 2.747-1.025 2.747-1.025.55 1.377.204 2.393.1 2.647.642.696 1.028 1.59 1.028 2.68 0 3.837-2.338 4.682-4.565 4.932.36.308.68.916.68 1.847 0 1.335-.012 2.414-.012 2.744 0 .267.182.578.694.48C19.138 20.166 22 16.415 22 12c0-5.523-4.477-10-10-10z"
                                />
                            </svg>
                            <span className="ml-1">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohammed-lahlali-a80996266/"
                            className="text-white hover:text-gray-400 flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="h-5 w-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2 2.75C2 2.335 2.336 2 2.75 2h18.5c.414 0 .75.335.75.75v18.5c0 .414-.336.75-.75.75H2.75a.752.752 0 0 1-.75-.75V2.75zm8.25 5.5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 7.5h-1V9.75h1v5.75zm7-7.5h-4a1 1 0 0 0-1 1v1.75h-1V9.75h1v.75c0 .414.336 1.25 1.5 1.25h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-1 1.75h-2V9.75h2v1.75z"
                                />
                            </svg>
                            <span className="ml-1">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:mohmmedlaeh81@gmail.com"
                            className="text-white hover:text-gray-400 flex items-center"
                        >
                            <svg
                                className="h-5 w-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-1h16c.55 0 1 .45 1 1v12.66c0 .54-.47.97-1 .97-.53 0-1-.43-1-.97V9.76L12 13.66 5 9.76V15c0 .54-.47.97-1 .97-.53 0-1-.43-1-.97V4c0-.55.45-1 1-1zm16 15H4c-.55 0-1-.45-1-1V8.24l7 4.9 7-4.9V17c0 .55-.45 1-1 1z"
                                />
                            </svg>
                            <span className="ml-1">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}




