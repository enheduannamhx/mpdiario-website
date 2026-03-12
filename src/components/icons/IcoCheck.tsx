import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoCheck: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Check"
    role="img"
  >
    <style>{`
      @keyframes check-draw {
        0% { stroke-dashoffset: 100; }
        100% { stroke-dashoffset: 0; }
      }
      .check-line { 
        stroke-dasharray: 100;
        animation: check-draw 1s ease-out forwards;
      }
    `}</style>
    <circle cx="32" cy="32" r="24" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <path className="check-line" d="M20 32l8 8 16-16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default IcoCheck;
