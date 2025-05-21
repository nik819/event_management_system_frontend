import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import { Link, useNavigate, useLocation } from "react-router-dom";

type otprequest = {
  userId: string;
  otp: string;
};

const OTP: React.FC = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const request: otprequest = { userId, otp };
    const response = await axios.post(
      "http://localhost:8000/client-api/v1/auth/verify-otp",
      request
    );
    console.log("response", response);

    if (response.status === 200) {
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      navigate("/event");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={verifyOtp} className="space-y-5">
          <div>
            <Input
              label="OTP"
              preIcon="opt"
              name="otp"
              type="text"
              placeholder="Enter OTP"
              required={true}
              onChange={(e: any) => setOtp(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition duration-300"
          >
            Verify
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

export default OTP;
