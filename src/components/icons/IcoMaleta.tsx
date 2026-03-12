import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoMaleta: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Maleta"
    role="img"
  >
    <rect x="12" y="18" width="40" height="32" rx="2" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <line x1="24" y1="18" x2="24" y2="14" stroke="#1A1A1A" strokeWidth="1.5"/>
    <line x1="40" y1="18" x2="40" y2="14" stroke="#1A1A1A" strokeWidth="1.5"/>
    <path d="M20 14h24" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="20" y1="28" x2="44" y2="28" stroke="#1A1A1A" strokeWidth="1"/>
    <circle cx="32" cy="40" r="6" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default IcoMaleta;
