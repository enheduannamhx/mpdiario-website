import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoMartelo: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Martelo"
    role="img"
  >
    <style>{`
      @keyframes hammer-swing {
        0%, 100% { transform: rotate(-20deg); }
        50% { transform: rotate(20deg); }
      }
      .hammer-swing { transform-origin: 24px 44px; animation: hammer-swing 2.5s ease-in-out infinite; }
    `}</style>
    <g className="hammer-swing">
      <rect x="18" y="8" width="12" height="24" rx="1" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
      <line x1="24" y1="32" x2="24" y2="56" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>
);

export default IcoMartelo;
