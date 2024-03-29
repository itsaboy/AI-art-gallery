import { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LOCATIONS, STYLES, ANIMES, imageAnimationVariants } from "../data";
import logo from "../assets/logo.svg";
import { AppContext } from "../context/AppContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { handleNewLocation } = useContext(AppContext);
  const { handleNewArtStyle } = useContext(AppContext);
  const { handleNewAnime } = useContext(AppContext);

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLocationClickMobile = (location) => {
    setMobileMenuOpen(false);
    handleNewLocation(location);
  };

  const handleArtSyleClickMobile = (style) => {
    setMobileMenuOpen(false);
    handleNewArtStyle(style);
  };

  const handleAnimeClickMobile = (style) => {
    setMobileMenuOpen(false);
    handleNewAnime(style);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 ${
        !user ? "bg-slate-950" : "bg-red-950"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="Neural Canvases logo" />
          </div>
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
              <Popover.Panel
                className={`absolute inset-x-0 top-0 -z-10 pt-14 shadow-2xl shadow-slate-950 ring-1 ring-gray-900/5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ${
                  !user ? "bg-slate-800" : "bg-red-800"
                }`}
              >
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {LOCATIONS.map((location) => (
                    <div
                      key={location.id}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-slate-950"
                    >
                      <motion.img
                        src={location.img}
                        alt={location.alt}
                        variants={imageAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-slate-950"
                      />
                      <Link
                        to="/photos"
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
              <Popover.Panel
                className={`absolute inset-x-0 top-0 -z-10 pt-14 shadow-2xl shadow-slate-950 ring-1 ring-gray-900/5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ${
                  !user ? "bg-slate-800" : "bg-red-800"
                }`}
              >
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {STYLES.map((style) => (
                    <div
                      key={style.id}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-slate-950"
                    >
                      <motion.img
                        src={style.img}
                        alt={style.alt}
                        variants={imageAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="rounded-lg shadow-lg shadow-slate-950"
                      />
                      <Link
                        to="/art"
                        onClick={() => handleNewArtStyle(style.name)}
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

          {user && (
            <Popover>
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-300">
                Anime
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
                <Popover.Panel
                  className={`absolute inset-x-0 top-0 -z-10 pt-14 shadow-2xl shadow-slate-950 ring-1 ring-gray-900/5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ${
                    !user ? "bg-slate-800" : "bg-red-800"
                  }`}
                >
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                    {ANIMES.map((anime) => (
                      <div
                        key={anime.id}
                        className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-slate-950"
                      >
                        <motion.img
                          src={anime.img}
                          alt={anime.alt}
                          variants={imageAnimationVariants}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          className="rounded-lg shadow-lg shadow-slate-950"
                        />
                        <Link
                          to="/anime"
                          onClick={() => handleNewAnime(anime.name)}
                          className="mt-6 block font-semibold text-slate-300"
                        >
                          {anime.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          )}

          <Link
            to="/info"
            className="text-sm font-semibold leading-6 text-slate-300"
          >
            Info
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user && (
            <>
              <p className="px-2.5 py-1.5 text-sm font-semibold text-red-200">
                Signed in as{" "}
                <span className="font-bold text-red-300">{user.username}</span>
              </p>
              <Link
                className="rounded-md bg-red-200 px-2.5 py-1.5 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-300 hover:ring-1 hover:ring-red-100"
                onClick={() => handleLogoutClick()}
              >
                Log out
              </Link>
            </>
          )}
          {!user && (
            <Link
              to="/login"
              className="rounded-md bg-blue-200 px-2.5 py-1.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-300 hover:ring-1 hover:ring-blue-100"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 ${
            !user ? "bg-slate-950" : "bg-red-950"
          }`}
        >
          <div className="flex items-center justify-between">
            <div href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={logo} alt="logo" />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-200"
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
                  onClick={() => setMobileMenuOpen(false)}
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
                          <Link
                            key={location.id}
                            to="/photos"
                            className="w-full"
                          >
                            <Disclosure.Button
                              as="div"
                              onClick={() =>
                                handleLocationClickMobile(location.name)
                              }
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:bg-slate-950"
                            >
                              {location.name}
                            </Disclosure.Button>
                          </Link>
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
                          <Link key={style.id} to="/art" className="w-full">
                            <Disclosure.Button
                              as="div"
                              onClick={() =>
                                handleArtSyleClickMobile(style.name)
                              }
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:bg-slate-950"
                            >
                              {style.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {user && (
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600">
                          Anime
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...ANIMES].map((anime) => (
                            <Link key={anime.id} to="/anime" className="w-full">
                              <Disclosure.Button
                                as="div"
                                onClick={() =>
                                  handleAnimeClickMobile(anime.name)
                                }
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-200 hover:bg-slate-950"
                              >
                                {anime.name}
                              </Disclosure.Button>
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
                <Link
                  to="/info"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-600"
                >
                  Info
                </Link>
              </div>
              <div className="py-6">
                {user && (
                  <>
                    <p className="-mx-3 block px-3 py-2 text-base font-semibold text-red-200">
                      Signed in as{" "}
                      <span className="font-bold text-red-300">
                        {user.username}
                      </span>
                    </p>
                    <Link
                      className="rounded-md bg-red-200 -mx-3 block px-3 py-2 text-base font-semibold text-red-600 shadow-sm hover:bg-red-300 hover:ring-1 hover:ring-red-100"
                      onClick={() => handleLogoutClick()}
                    >
                      Log out
                    </Link>
                  </>
                )}
                {!user && (
                  <Link
                    to="/login"
                    className="rounded-md bg-blue-200 -mx-3 block px-3 py-2 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-300 hover:ring-1 hover:ring-blue-100"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
