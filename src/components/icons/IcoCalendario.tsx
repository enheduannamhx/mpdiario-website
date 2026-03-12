import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoCalendario: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Calendário"
    role="img"
  >
    <rect x="10" y="14" width="44" height="40" rx="2" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <line x1="10" y1="26" x2="54" y2="26" stroke="#1A1A1A" strokeWidth="1"/>
    <line x1="22" y1="8" x2="22" y2="14" stroke="#1A1A1A" strokeWidth="1.5"/>
    <line x1="42" y1="8" x2="42" y2="14" stroke="#1A1A1A" strokeWidth="1.5"/>
    <circle cx="22" cy="36" r="3" fill="#1A1A1A"/>
    <circle cx="32" cy="36" r="3" fill="#1A1A1A"/>
    <circle cx="42" cy="36" r="3" fill="#1A1A1A"/>
    <circle cx="22" cy="46" r="3" fill="#1A1A1A"/>
    <circle cx="32" cy="46" r="3" fill="#1A1A1A"/>
  </svg>
);

export default IcoCalendario;
