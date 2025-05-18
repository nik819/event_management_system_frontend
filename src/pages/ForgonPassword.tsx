import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type loginrequest = {
  emailOrUsername: string;
};

const ForgotPassword: React.FC = () => {
  const [emailOrUsername, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setSubmitted(true);

  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 3000);
  //   };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowOtpField(true);
    console.log("Login clicked", { emailOrUsername });
    const request: loginrequest = { emailOrUsername };
    const response = await axios.post(
      "http://localhost:8000/client-api/v1/auth/forgot-password",
      request
    );
    console.log("response", response);
    if (response.status === 200) {
      navigate("/login");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    setSubmitted(true); // Or redirect to password reset
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center">
            If an account with that email exists, you will receive a password
            reset link shortly.
          </div>
        ) : (
          <form
            onSubmit={!showOtpField ? handleLogin : handleOtpSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={emailOrUsername}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Show OTP field conditionally */}
            {showOtpField && (
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition duration-300"
            >
              {showOtpField ? "Verify OTP" : "Enter OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
