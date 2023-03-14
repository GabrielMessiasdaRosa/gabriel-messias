import Col from "./col";

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Col className="relative w-full items-center justify-center">
      <Col className="md:w-[720px] xl:w-[1280px]">{children}</Col>
    </Col>
  );
};

export default Container;
