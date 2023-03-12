import Button from "./button";
import Container from "./container";
import Row from "./row";
export type HeadeProps = {};

const Header = ({}: HeadeProps) => {
  return (
    <header className="flex w-full py-4">
      <Container>
        <Row className="h-10 items-center justify-between">
          <Row className="items-center space-x-24">
            <p
              className="bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-2xl font-extrabold
       text-transparent"
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
