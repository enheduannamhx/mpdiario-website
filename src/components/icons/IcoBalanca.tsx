import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoBalanca: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Balança"
    role="img"
  >
    <style>{`
      @keyframes swing {
        0%, 100% { transform: rotate(-8deg); }
        50% { transform: rotate(8deg); }
      }
      .balance-arm {
        transform-origin: 32px 16px;
        animation: swing 3s ease-in-out infinite;
      }
    `}</style>
    <line x1="32" y1="16" x2="32" y2="60" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="20" y1="60" x2="44" y2="60" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="32" cy="10" r="3" fill="#1A1A1A"/>
    <line x1="32" y1="16" x2="32" y2="22" stroke="#1A1A1A" strokeWidth="1"/>
    <g className="balance-arm">
      <line x1="12" y1="22" x2="52" y2="22" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round"/>
      <line x1="12" y1="22" x2="10" y2="34" stroke="#1A1A1A" strokeWidth="1"/>
      <ellipse cx="10" cy="38" rx="8" ry="2" stroke="#1A1A1A" strokeWidth="1" fill="none"/>
      <line x1="52" y1="22" x2="54" y2="34" stroke="#1A1A1A" strokeWidth="1"/>
      <ellipse cx="54" cy="38" rx="8" ry="2" stroke="#1A1A1A" strokeWidth="1" fill="none"/>
    </g>
  </svg>
);

export default IcoBalanca;
