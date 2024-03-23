import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Validation logic
    if (!email.trim()) {
      setEmailError("Please enter your registered email address.");
    } else {
      // Handle form submission
      // For demo purposes, we'll just log the email
      console.log("Submitted email:", email);
    }
   
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(""); // Clear error message on input change
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
          <h2 className="mt-10 text-center text-3xl capitalize font-bold leading-9 tracking-tight text-purple-800">
            Forgot Password
          </h2>
          <p className="mt-2">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
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
              <button
                type="submit"
                class="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded"
              >
                Email Password Reset Link
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Remember Password? {" "}
             <Link
              href="#"
              className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
              to={'/'}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
