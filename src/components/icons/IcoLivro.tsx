import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoLivro: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Livro"
    role="img"
  >
    <style>{`
      @keyframes book-open {
        0%, 100% { transform: rotateY(0deg); }
        50% { transform: rotateY(-10deg); }
      }
      .book-open { transform-origin: 32px 32px; animation: book-open 3s ease-in-out infinite; }
    `}</style>
    <g className="book-open">
      <path d="M8 12v40c0 2 2 4 4 4h16V8H12c-2 0-4 2-4 4z" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      <path d="M56 12v40c0 2-2 4-4 4H36V8h16c2 0 4 2 4 4z" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      <line x1="32" y1="8" x2="32" y2="56" stroke="#1A1A1A" strokeWidth="1"/>
    </g>
  </svg>
);

export default IcoLivro;
