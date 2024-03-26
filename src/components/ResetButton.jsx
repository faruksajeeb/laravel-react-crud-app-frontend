import React from "react";
import { BiReset } from "react-icons/bi";

const ResetButton = ({onClick}) => {
    
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex text-gray-700 bg-gray-200 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <BiReset className="mr-2"/> Reset
    </button>
  );
};

export default ResetButton;
