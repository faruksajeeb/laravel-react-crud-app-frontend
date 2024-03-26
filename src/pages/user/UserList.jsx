import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axiosClient from "../../axios-client";
import TableLoader from "../../components/TableLoader";
import AddButton from "../../components/AddButton";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers();
  }, [page]);

  const getUsers = async () => {
    setLoading(true);
    // const response = await axiosClient.get(`/users?page=${page}`);
    // console.log(response.data);
    // debugger;
    // setUsers(response.data);
    await axiosClient
      .get(`/users?page=${page}`)
      .then(({ data }) => {
        //  console.log(data);
        setLoading(false);
        setUsers(data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onDeleteClick = user => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return
    }
    axiosClient.delete(`/users/${user.id}`)
      .then(() => {
        //setNotification('User was successfully deleted')
        getUsers()
      })
  }


  return (
    <div>
      <div className="flex justify-between">
        <h1 className="float-left h1 text-gray-900 text-3xl">Users</h1>
        <AddButton name="User" to="/users/create"/>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-5">
        <div className="flex items-center justify-between flex-column flex-wrap  p-2 md:flex-row space-y-4 md:space-y-0 bg-white light:bg-gray-900">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:bg-gray-700 light:hover:border-gray-600 light:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 light:bg-gray-700 light:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 light:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                  >
                    Reward
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                  >
                    Promote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 light:hover:bg-gray-600 light:hover:text-white"
                  >
                    Activate account
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 light:hover:bg-gray-600 light:text-gray-200 light:hover:text-white"
                >
                  Delete User
                </a>
              </div>
            </div>
          </div>
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 light:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-400 light:bg-primary-700 light:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="6" class="">
                  <TableLoader />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="opacity-0 transition-opacity duration-500 ease-in-out opacity-100">
              {users.data?.map((u) => (
                <tr
                  key={u.id}
                  className="opacity-0 transition-opacity duration-500 ease-in-out opacity-100 bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600"
                >
                  <td className="w-4 p-1 px-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-1">{u.id}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap light:text-white"
                  >
                    {/* <img
                  className="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese image"
                /> */}
                    <FaUserCircle className="text-4xl" />
                    <div className="ps-3">
                      <div className="text-base font-semibold">{u.name}</div>
                      <div className="font-normal text-gray-500">{u.email}</div>
                    </div>
                  </th>
                  <td className="px-6 py-1">React Developer</td>
                  <td className="px-6 py-1">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-1">
                    <Link
                      to={'/users/'+u.id}
                      type="button" 
                      className=" btn bg-orange-500 px-2 mx-1 text-white font-medium text-blue-600 light:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <button className="btn-delete btn bg-red-600 px-2  mx-1 text-white" type="button" onClick={ev => onDeleteClick(u)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
         {/* Pagination controls */}
         
         <Pagination setPage={setPage} users={users}/>
      </div>
    </div>
  );
};

export default UserList;
