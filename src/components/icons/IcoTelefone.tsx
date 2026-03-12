import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoTelefone: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Telefone"
    role="img"
  >
    <style>{`
      @keyframes phone-ring {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        75% { transform: rotate(10deg); }
      }
      .phone-ring { transform-origin: 24px 28px; animation: phone-ring 2s ease-in-out infinite; }
    `}</style>
    <g className="phone-ring">
      <rect x="16" y="12" width="24" height="40" rx="4" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      <circle cx="28" cy="44" r="3" fill="#1A1A1A"/>
    </g>
  </svg>
);

export default IcoTelefone;
