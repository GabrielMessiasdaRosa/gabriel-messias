import Col from "./col";
import Container from "./container";
import Header from "./header";

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Col className="items-center justify-center w-screen">
      <Header />
      <Container>{children}</Container>
    </Col>
  );
};

export default DefaultLayout;
