import React from 'react';

export const Logo: React.FC<{ className?: string; light?: boolean; onClick?: () => void }> = ({ 
  className = "", 
  onClick
}) => {
  return (
    <div 
      className={`inline-flex items-center cursor-pointer select-none transition-opacity hover:opacity-80 ${className}`} 
      onClick={onClick}
    >
      <img 
        src="https://6971cc220fbe657fd5e61849.imgix.net/logo%20b.png" 
        alt="TAKI 极链" 
        className="h-12 md:h-14 w-auto object-contain"
      />
    </div>
  );
};