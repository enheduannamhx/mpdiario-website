import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoEmail: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Email"
    role="img"
  >
    <style>{`
      @keyframes envelope-flap {
        0%, 100% { transform: rotateX(0deg); }
        50% { transform: rotateX(-15deg); }
      }
      .envelope-flap { transform-origin: 32px 22px; animation: envelope-flap 3s ease-in-out infinite; }
    `}</style>
    <rect x="10" y="18" width="44" height="28" rx="2" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <g className="envelope-flap">
      <line x1="10" y1="18" x2="32" y2="32" stroke="#1A1A1A" strokeWidth="1"/>
      <line x1="54" y1="18" x2="32" y2="32" stroke="#1A1A1A" strokeWidth="1"/>
    </g>
  </svg>
);

export default IcoEmail;
