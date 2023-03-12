import React from "react";
export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
       transition-all duration-300
       bg-gradient-to-r from-[#ee0979]
       to-[#ff6a00] text-white 
       rounded-full px-4 py-2 bg-size-150
       bg-pos-50 hover:bg-pos-100
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
