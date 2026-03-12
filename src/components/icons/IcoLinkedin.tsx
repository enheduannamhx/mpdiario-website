import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoLinkedin: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="LinkedIn"
    role="img"
  >
    <rect x="10" y="10" width="44" height="44" rx="4" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <line x1="22" y1="24" x2="22" y2="42" stroke="#1A1A1A" strokeWidth="1.5"/>
    <circle cx="22" cy="18" r="4" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <path d="M34 24v18M34 30c0-2 2-4 4-4s4 2 4 4" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default IcoLinkedin;
