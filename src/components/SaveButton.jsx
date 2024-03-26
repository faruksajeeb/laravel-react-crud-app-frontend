import React from "react";
import { FaSave } from "react-icons/fa";

const SaveButton = ({label}) => {
  return (
    <button
      type="submit"
      className="flex text-white bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <FaSave className="mr-2"/> Save {label}
    </button>
  );
};

export default SaveButton;
