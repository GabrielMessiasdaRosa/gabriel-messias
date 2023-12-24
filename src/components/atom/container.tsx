import React from "react";

export interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-9 ">
      {children}
    </div>
  );
}
