import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
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
      <Row className="relative max-w-7xl px-2 sm:px-6 lg:px-8">
        <Row className="relative h-16 w-screen items-center justify-between">
          <Row className="absolute inset-y-0 right-6 top-1 items-center justify-center sm:hidden">
            {/* Mobile menu button*/}
            <div className="sm:hidden ">
              <Menu as="div" className="relative">
                {({ open }) => {
                  return (
                    <>
                      <Menu.Button>
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-8 w-8"
                            aria-hidden="true"
                          />
                        )}
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 w-[15rem] origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Col className="items-center space-y-2 rounded-sm py-4">
                            {navigation.map((navItem, index) => (
                              <Menu.Item key={index} as={Fragment}>
                                {({ active }) => {
                                  return (
                                    <a
                                      href={navItem.href}
                                      className="font-thin text-black"
                                    >
                                      {navItem.name}
                                    </a>
                                  );
                                }}
                              </Menu.Item>
                            ))}
                          </Col>
                        </Menu.Items>
                      </Transition>
                    </>
                  );
                }}
              </Menu>
            </div>
          </Row>
          <Row className="w-full items-center justify-center px-4 sm:items-stretch sm:justify-between">
            <Col>
              <p className="hidden font-poiret text-2xl font-extrabold text-white text-transparent sm:flex md:ml-0">
                Gabriel Messias da Rosa
              </p>
              <p className="font-poiret text-2xl font-extrabold text-white text-transparent sm:hidden md:ml-0">
                GMR
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
    </Container>
  );
};

export default Navbar;
