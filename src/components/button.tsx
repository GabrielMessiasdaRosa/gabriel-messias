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
       rounded-full bg-gradient-to-r
       from-[#ee0979] to-[#ff6a00]
       bg-size-150 bg-pos-50 
       px-4 py-2 text-white transition-all
       duration-300 hover:bg-pos-100
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
