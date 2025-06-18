
import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", width = 200, height = 200 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue B */}
      <path d="M30 30 h50 a20 20 0 0 1 0 40 a20 20 0 0 1 0 40 h-50 z" fill="#007BFF"/>
      {/* Pixel squares on B */}
      <rect x="35" y="120" width="5" height="5" fill="white"/>
      <rect x="43" y="120" width="5" height="5" fill="white"/>
      <rect x="35" y="128" width="5" height="5" fill="white"/>
      {/* Circuit dot and line on B */}
      <circle cx="50" cy="40" r="3" fill="white"/>
      <line x1="50" y1="40" x2="50" y2="60" stroke="white" strokeWidth="2"/>

      {/* White F */}
      <path d="M100 30 h50 v10 h-35 v15 h30 v10 h-30 v25 h-15 z" fill="white"/>
      {/* Circuit line on F */}
      <line x1="115" y1="70" x2="135" y2="70" stroke="#007BFF" strokeWidth="2"/>
      <circle cx="135" cy="70" r="3" fill="#007BFF"/>
    </svg>
  );
};

export default Logo;
