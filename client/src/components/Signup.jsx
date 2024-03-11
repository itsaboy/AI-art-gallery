import { useState } from "react";
import { Link } from "react-router-dom";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, signupError, signupLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 mb-24 mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-slate-400">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-slate-950 px-6 py-12 shadow-lg sm:rounded-lg sm:px-12 shadow-blue-400/40">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-blue-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {signupError && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-600"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-blue-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              {/* <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Re-type Password
                </label>
                <div className="mt-2">
                  <input
                    id="retype"
                    name="retype"
                    type="password"
                    autoComplete="current-password"
                    // required
                    disabled
                    className="block w-full rounded-md border-0 py-1.5 text-slate-300 shadow-sm ring-1 ring-inset ring-blue-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              <br />

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  disabled={signupLoading}
                >
                  Sign up
                </button>
                {signupError && (
                  <p className="mt-2 text-sm text-red-400" id="email-error">
                    {signupError}
                  </p>
                )}
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-blue-400 hover:text-indigo-500"
            >
              Log in!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
