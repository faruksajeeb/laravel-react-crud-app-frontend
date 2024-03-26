import React from 'react';
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const AddButton = (props) => {
    return (
        <Link to={props.to} type="button" className="flex float-right focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            <FaPlus className='mx-1'/> 
            <span>Add {props.name}</span>
        </Link>
    );
};

export default AddButton;