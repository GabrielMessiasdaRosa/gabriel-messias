import Button from "./button";
import Container from "./container";
import Row from "./row";
export type HeadeProps = {};

const Header = ({}: HeadeProps) => {
  return (
    <header className="flex shadow-md shadow-slate-100/20 -mt-1 py-4 w-full ">
      <Container>
        <Row className="justify-between items-center h-10">
          <Row className="space-x-24 items-center">
            <p
              className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#ee0979]
       to-[#ff6a00]"
            >
              GMR.dev
            </p>
            <nav>
              <ul>
                <Row className="space-x-8">
                  <li>
                    <a
                      className="transition-all duration-300 hover:text-orange-600"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-300 hover:text-orange-600"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-300 hover:text-orange-600"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </Row>
              </ul>
            </nav>
          </Row>
          <Row className="space-x-4">
            <Button>Let's talk</Button>
          </Row>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
