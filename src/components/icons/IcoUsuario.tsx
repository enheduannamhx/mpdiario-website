import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

const IcoUsuario: React.FC<IconProps> = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Usuário"
    role="img"
  >
    <circle cx="32" cy="20" r="10" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
    <path d="M14 56c0-10 8-18 18-18s18 8 18 18" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default IcoUsuario;
