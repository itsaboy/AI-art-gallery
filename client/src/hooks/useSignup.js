import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [signupError, setSignupError] = useState(null);
  const [signupLoading, setSignupLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setSignupLoading(true);
    setSignupError(null);
    const req = "/api/user/signup";
    const res = await fetch(req, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setSignupLoading(false);
      setSignupError(data.error);
    }
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      setSignupLoading(false);
    }
  };

  return { signupError, signupLoading, signup };
};
