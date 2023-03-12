import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Col from "./col";
import Container from "./container";
import Row from "./row";

export type NavbarProps = {};
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({}: NavbarProps) => {
  return (
    <Container>
      <Disclosure as="nav" className="w-full bg-transparent">
        {({ open }) => (
          <>
            <Row className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <Row className="relative h-16 w-screen items-center justify-between">
                <Row className="absolute inset-y-0 left-2 items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </Row>
                <Row className="w-full items-center justify-center px-4 sm:items-stretch sm:justify-between">
                  <Col>
                    <p className="ml-3 bg-gradient-to-br from-[#ee0979] to-[#ff6a00] bg-clip-text text-2xl font-extrabold text-transparent md:ml-0">
                      Gabriel Messias da Rosa
                    </p>
                  </Col>
                  <Col className="hidden sm:ml-6 sm:block">
                    <Row className="space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-orange-500 transition-all duration-300 hover:text-orange-600"
                              : "text-gray-300 transition-all duration-300 hover:text-orange-600",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Row>

            <Disclosure.Panel className="sm:hidden">
              <Col className="items-center space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </Col>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Container>
  );
};

export default Navbar;
