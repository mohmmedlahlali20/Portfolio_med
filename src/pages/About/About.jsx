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
        <div className="container">
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
      <img
        className='about-img'
        src={MyImage}
        alt="me"
      />
    </div>
  );
}
