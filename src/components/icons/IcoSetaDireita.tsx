import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoSetaDireita: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Seta Direita"
    role="img"
  >
    <style>{`
      @keyframes arrow-move {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(4px); }
      }
      .arrow-move { animation: arrow-move 1.5s ease-in-out infinite; }
    `}</style>
    <g className="arrow-move">
      <line x1="12" y1="32" x2="44" y2="32" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 20l12 12-12 12" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </g>
  </svg>
);

export default IcoSetaDireita;
