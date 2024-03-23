import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Validation logic
    if (!email.trim()) {
      setEmailError("Please enter a valid email address.");
    } else {
      // Handle form submission
      // For demo purposes, we'll just log the email
      console.log("Submitted email:", email);
    }
    if (!password.trim()) {
        setPasswordError("Please enter your password.");
      } else {
        // Handle form submission
        // For demo purposes, we'll just log the password
        console.log("Submitted password:", password);
      }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setPassword(event.target.value);
    setEmailError(""); // Clear error message on input change
    setPasswordError(""); // Clear error message on input change
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-3xl uppercase font-bold leading-9 tracking-tight text-purple-800">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-solid border-gray-200 border-2 rounded-md p-10 bg-white shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address <span className="text-red-500">*</span>
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                value={email} 
                onChange={handleEmailChange} 
                placeholder="Enter User Email"
                
                className={`mt-1 p-2 border border-2  ring-purple-400 rounded-md w-full focus:outline-none focus:ring ${emailError ? 'border-red-500' : ''}`}
                />
                {emailError && <div className="text-red-500">{emailError}</div>}
                
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password  <span className="text-red-500">*</span>
                </label>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-purple-600 hover:text-purple-500"
                    to = {'/forgot_password'}
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password} 
                onChange={handleEmailChange} 
                placeholder="Enter your password"
                  className={`mt-1 p-2 border border-2 ring-purple-400 rounded-md w-full focus:outline-none focus:ring ${passwordError ? 'border-red-500' : ''}`}
                />
                {passwordError && <div className="text-red-500">{passwordError}</div>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? {" "}
             <Link
              href="#"
              className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
              to={'/register'}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
