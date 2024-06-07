import React, { useState } from 'react';
import './More.css';

export default function More() {
    const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });
    const [score, setScore] = useState(0);

    const moveButton = () => {
        const top = Math.random() * 80 + 10 + '%';
        const left = Math.random() * 80 + 10 + '%';
        setButtonPosition({ top, left });
        setScore(score + 1);
    };

    return (
        <div className='container flex justify-center items-center h-screen'>
            <div
                className="relative flex flex-col items-center justify-between h-[600px] w-[300px] border-4 border-black rounded-3xl bg-gray-50 p-4"
                style={{ boxShadow: '5px 5px 2.5px 6px rgb(209, 218, 218)' }}
            >
                <span
                    className="absolute top-2 w-14 h-1 bg-black rounded-sm animate-pulse"
                ></span>
                <span
                    className="absolute top-5 left-2 right-2 border border-black bg-black h-8 rounded-xl animate-fadeIn"
                ></span>
                
                <div className="phone">
                    <button 
                        className="button" 
                        style={{ top: buttonPosition.top, left: buttonPosition.left }} 
                        onClick={moveButton}
                    >
                        Click Me!
                    </button>
                    <div className="score">Score: {score}</div>
                </div>

                <span
                    className="absolute bottom-10 w-16 h-1 bg-black rounded-sm animate-pulse"
                ></span>
            </div>
        </div>
    );
}
