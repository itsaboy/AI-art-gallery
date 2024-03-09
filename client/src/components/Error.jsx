import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Error() {
  return (
    <div className="error-container">
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-slate-950 lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <div>
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto sm:h-12" src={logo} alt="" />
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base font-semibold leading-8 text-red-600">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-600 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-300">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Link
                to="/"
                className="text-sm font-semibold leading-7 text-slate-200"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3 ">
          <div className="py-10 bg-gradient-to-b from-slate-900 to-slate-950">
            <p className="text-left text-xs leading-5 text-slate-200 px-4">
              &copy; Zach of all Trades. All rights reserved.
            </p>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
