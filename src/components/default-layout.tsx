import Col from "./col";
import Navbar from "./navbar";

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Col className="w-screen items-center justify-center overflow-hidden pb-10">
      <Navbar />
      {children}
    </Col>
  );
};

export default DefaultLayout;
