import Col from "./col";
import Footer from "./footer";
import Navbar from "./navbar";

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Col className="items-center justify-center overflow-hidden pb-10">
      <div className="w-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </Col>
  );
};

export default DefaultLayout;
