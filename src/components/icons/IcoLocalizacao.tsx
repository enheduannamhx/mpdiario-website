import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoLocalizacao: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Localização"
    role="img"
  >
    <style>{`
      @keyframes pin-bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }
      .pin-bounce { animation: pin-bounce 2s ease-in-out infinite; }
    `}</style>
    <g className="pin-bounce">
      <path d="M32 8c-10 0-18 8-18 18 0 12 18 30 18 30s18-18 18-30c0-10-8-18-18-18z" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      <circle cx="32" cy="26" r="5" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    </g>
  </svg>
);

export default IcoLocalizacao;
