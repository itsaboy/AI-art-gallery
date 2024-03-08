import { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LOCATIONS, STYLES, imageAnimationVariants } from "../data";
import logo from "../assets/logo.svg";
import { AppContext } from "../AppContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { handleNewLocation } = useContext(AppContext);

  return (
    <header className="relative isolate z-10 bg-slate-950">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to={location.path}
            className="text-sm font-semibold leading-6 text-slate-300"
          >
            Home
          </Link>
          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-300">
              Photos
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-slate-300"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-slate-800 pt-14 shadow-2xl shadow-slate-950 ring-1 ring-gray-900/5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {LOCATIONS.map((location) => (
                    <div
                      key={location.id}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-slate-950"
                    >
                      <motion.img
                        src={location.img}
                        variants={imageAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      />
                      <Link
                        to={location.path}
                        onClick={() => handleNewLocation(location.name)}
                        className="mt-6 block font-semibold text-slate-300"
                      >
                        {location.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-300">
              Art
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-slate-300"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-slate-800 pt-14 shadow-2xl shadow-slate-950 ring-1 ring-gray-900/5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {STYLES.map((style) => (
                    <div
                      key={style.id}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-slate-950"
                    >
                      <Link
                        to={style.path}
                        className="mt-6 block font-semibold text-slate-300"
                      >
                        {style.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/info"
            className="text-sm font-semibold leading-6 text-slate-300"
          >
            Info
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-slate-300"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-300"
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
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600">
                        Photos
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...LOCATIONS].map((location) => (
                          <Disclosure.Button
                            key={location.id}
                            as="div"
                            onClick={() => handleNewLocation(location.name)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:bg-slate-950"
                          >
                            <Link to={location.path}>{location.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600">
                        Art
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...STYLES].map((style) => (
                          <Disclosure.Button
                            key={style.id}
                            as="div"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:bg-slate-950"
                          >
                            <Link to={style.path}>{style.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/info"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600"
                >
                  Info
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
