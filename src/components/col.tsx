import React from "react";
export type ColProps = {
  children: React.ReactNode;
  className?: string;
};

const Col = ({ children, className }: ColProps) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default Col;
