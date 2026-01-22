import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  withArrow?: boolean;
}

export const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  withArrow = false
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles = "relative overflow-hidden font-bold tracking-widest uppercase transition-all duration-300 ease-out flex items-center justify-center gap-2";
  const sizeStyles = "py-4 px-8 text-sm";
  
  const variants = {
    primary: "bg-taki-orange text-white hover:bg-taki-blue shadow-lg hover:shadow-taki-blue/30",
    secondary: "border-2 border-taki-orange text-taki-orange hover:border-taki-blue hover:text-taki-blue bg-transparent",
  };

  const transformStyle = isPressed ? 'scale(0.95)' : 'scale(1)';

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      style={{ transform: transformStyle }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && <ArrowRight size={18} />}
      </span>
    </button>
  );
};