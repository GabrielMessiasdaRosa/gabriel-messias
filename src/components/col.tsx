import React from "react";
export type ColProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Col = ({ children, className, ...props }: ColProps) => {
  return (
    <div className={`flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Col;
