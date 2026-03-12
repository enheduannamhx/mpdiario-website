import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoDocumento: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Documento"
    role="img"
  >
    <style>{`
      @keyframes doc-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
      }
      .doc-float { animation: doc-float 2.5s ease-in-out infinite; }
    `}</style>
    <g className="doc-float">
      <path d="M18 8h20l12 12v36a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      <line x1="24" y1="26" x2="40" y2="26" stroke="#1A1A1A" strokeWidth="1"/>
      <line x1="24" y1="34" x2="40" y2="34" stroke="#1A1A1A" strokeWidth="1"/>
      <line x1="24" y1="42" x2="32" y2="42" stroke="#1A1A1A" strokeWidth="1"/>
      <line x1="18" y1="20" x2="30" y2="20" stroke="#1A1A1A" strokeWidth="1.5"/>
    </g>
  </svg>
);

export default IcoDocumento;
