import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginError, loginLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 mb-24 mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-slate-400">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-slate-950 px-6 py-12 shadow-lg sm:rounded-2xl sm:px-12 shadow-blue-400/40">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-slate-200"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-slate-900 shadow-sm ring-1 ring-inset ring-blue-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
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

              <br />

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  disabled={loginLoading}
                >
                  Log in
                </button>
                {loginError && (
                  <p className="mt-2 text-sm text-red-400" id="email-error">
                    {loginError}
                  </p>
                )}
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-blue-400 hover:text-indigo-500"
            >
              Sign up!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
