import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type loginrequest = {
  emailOrUsername: string;
};

const ForgotPassword: React.FC = () => {
  const [emailOrUsername, setEmail] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login clicked", { emailOrUsername });
    const request: loginrequest = { emailOrUsername };
    const response = await axios.post(
      "http://localhost:8000/client-api/v1/auth/forgot-password",
      request
    );
    console.log("response", response);
    if (response.status === 200) {
      setShowOtpField(true);
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    setShowPasswordForm(true);
    setShowOtpField(false);
  };
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Entered Password:", password);
    navigate("/login");
  };

  // Unified submit handler to avoid type errors
  const handleFormSubmit = (e: React.FormEvent) => {
    if (!showOtpField && !showPasswordForm) {
      handleVerifyEmail(e);
    } else if (showOtpField && !showPasswordForm) {
      handleOtpSubmit(e);
    } else if (showPasswordForm) {
      handleChangePassword(e);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            Forgot Password
          </h2>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {!showOtpField && !showPasswordForm && (
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
            )}
            {/* Show OTP field conditionally */}
            {showOtpField && !showPasswordForm && (
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
            {showPasswordForm && (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter the new password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="text"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter the confirm Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            {/* 
            {showPasswordForm && (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter the new password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="text"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter the confirm Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )} */}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition duration-300"
            >
              {!showOtpField && !showPasswordForm && "Submit"}
              {showOtpField && !showPasswordForm && "Verify OTP"}
              {showPasswordForm && "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
