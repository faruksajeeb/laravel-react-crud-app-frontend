import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          404 - Page Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Oops! The page you're looking for does not exist.
        </p>
        <a
          href="/"
          className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
