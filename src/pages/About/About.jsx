import React, { useState } from 'react';
import MyImage from '../../assets/images/me.jpg';
import MyCV from '../../assets/pdf/CV_Mohammed_Lahlali (1).pdf';
import './About.css';

export default function About() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000); // Reset after 4 seconds
  };

  return (
<div className='about-container'>
  <div className='about-text'>
    <div className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">About Me</p>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              I'm a passionate developer
            </h2>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 dark:text-gray-300 lg:mx-auto">
              As a Full Stack Developer, I thrive on crafting cutting-edge solutions that push the boundaries of innovation. My skill set encompasses a wide array of technologies, including HTML, CSS, JavaScript, PHP, MySQL, React, Laravel, Ubuntu, and Docker. Whether it's designing responsive and intuitive user interfaces with HTML and CSS, implementing dynamic functionality with JavaScript, architecting robust backend systems with PHP and Laravel, optimizing database performance with MySQL, or deploying scalable applications with Docker on Ubuntu servers, I'm equipped to tackle any challenge. With a relentless passion for problem-solving and a commitment to excellence, I'm eager to collaborate and build something truly remarkable together. Let's bring our ideas to life and create extraordinary digital experiences that make a lasting impact.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              className='about-img'
              src={MyImage}
              alt="me"
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <a 
          className={`label ${downloaded ? 'downloaded' : ''}`} 
          href={MyCV} 
          download 
          onClick={handleDownload}
        >
          <span className="circle">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="icon"
            >
              <path
                d="M12 19V5m0 14-4-4m4 4 4-4"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              ></path>
            </svg>
            <div className="square"></div>
          </span>
          <p className="title">Download</p>
          <p className="title">Done</p>
        </a>
      </div>
    </div>
  </div>
 
</div>

  );
}
