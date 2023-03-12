import Col from "./col";

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Col className="relative w-full items-center justify-center">
      <Col className="w-[1280px]">{children}</Col>
    </Col>
  );
};

export default Container;
