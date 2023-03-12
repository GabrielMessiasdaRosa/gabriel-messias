export type RowProps = { children: React.ReactNode; className?: string };

const Row = ({ children, className }: RowProps) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default Row;
