import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type loginrequest = {
  emailOrUsername: string;
  password: string;
};

const Login: React.FC = () => {
  const [emailOrUsername, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login clicked", { emailOrUsername, password });
    const request: loginrequest = { emailOrUsername, password };
    const response = await axios.post(
      "http://localhost:8000/client-api/v1/auth/login",
      request
    );
    console.log("response", response.data.challenge);
    if (response.data.challenge === true) {
      navigate("/OTP", { state: { userId: response.data.userId } });
    } else if (response.data.challenge === false) {
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      toast.success("Login successful!");
      navigate("/event");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Input
              label="Email or Username"
              preIcon="mail"
              name="email"
              type="text"
              placeholder="Enter your email or username"
              required={true}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Password"
              preIcon="lock-closed"
              name="password"
              type="password"
              placeholder="Enter your password"
              required={true}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?&nbsp;
          <Link
            to="/registration"
            className="text-blue-500 hover:underline font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
