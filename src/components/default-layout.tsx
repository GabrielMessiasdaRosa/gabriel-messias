import Col from "./col";
import Header from "./header";

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Col className="w-screen items-center justify-center">
      <Header />
      {children}
    </Col>
  );
};

export default DefaultLayout;
