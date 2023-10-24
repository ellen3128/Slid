import { useState } from "react";
import { Link } from "react-scroll";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import slidLogo from "../logo/Slid-logo2.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav
        className="!py-0 mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            spy={true}
            smooth={true}
            offset={-144}
            duration={500}
            to="Home"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Your Company</span>
            <img className="h-36 w-auto" src={slidLogo} alt="Slid Logo" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            spy={true}
            smooth={true}
            offset={-144}
            duration={500}
            to="Home"
            className="text-xl font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3"
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            to="Products"
            className="text-xl font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3"
          >
            Products
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="AboutUs"
            className="text-xl font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3"
          >
            About Us
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="FAQ"
            className="text-xl font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3"
          >
            FAQ
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="text-xl font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3"
          >
            Contact
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-36 w-auto" src={slidLogo} alt="Slid Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Home"
                  className="-mx-3 block rounded-lg px-4 py-3 text-xl font-semibold leading-8 text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  to="Products"
                  className="-mx-3 block rounded-lg px-4 py-3 text-xl font-semibold leading-8 text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Products
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutUs"
                  className="-mx-3 block rounded-lg px-4 py-3 text-xl font-semibold leading-8 text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="FAQ"
                  className="-mx-3 block rounded-lg px-4 py-3 text-xl font-semibold leading-8 text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  FAQ
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Contact"
                  className="-mx-3 block rounded-lg px-4 py-3 text-xl font-semibold leading-8 text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
