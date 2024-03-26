import React, { useEffect, useState } from "react";
import SaveButton from "../../components/SaveButton";
import ResetButton from "../../components/ResetButton";
import axiosClient from "../../axios-client";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const UserForm = () => {
  // If Edit
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // setIsVisible(true);
    if (id) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    setLoading(true);
    await axiosClient
      .get(`/users/${id}`)
      .then(({ data }) => {
        console.log(data.data);
        setFormData(data.data);
        console.log(formData.name);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the current input field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!id) {
      if (!formData.password) {
        errors.password = "Password is required";
      }
      if (!formData.password_confirmation) {
        errors.password_confirmation = "Confirm Password is required";
      }
    }

    if (formData.password !== formData.password_confirmation) {
      errors.password_confirmation = "Passwords do not match";
    }

    setErrors(errors);

    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      // Form submission logic
      // Make HTTP POST request using Axios
     console.log(formData);
      if (id) {
        axiosClient
          .put(`/users/${id}`, formData)
          .then(() => {
            // setNotification("User was successfully updated");
            navigate('/users')
            
          })
          .catch((err) => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors);
            }
          });
      } else {
        axiosClient.post('/users', formData)
          .then(({ data }) => {
            // Handle success
            console.log("Form submitted successfully:", data);
            console.log("Form submitted:", formData);
          })
          .catch((error) => {
            // Handle error
            const response = error.response;
            if (response && response.status === 422) {
              // console.log(response.data.errors);
              setErrors(response.data.errors);
            }
            console.error("Error submitting form:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
      setLoading(true);
    }
  };

  const handleReset = () => {
    // Reset form data or state variables here
    setFormData({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      // Reset other fields as needed
    });
    let errors = {};
    setErrors({
      ...errors,
    });
  };

  return (
    <div>
      <div className="card max-w-lg mx-auto rounded-lg bg-white  shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-3">
        <div className="card-header border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
          <h1 className="text-3xl font-bold ">{id ? "Edit" : "Create"} User</h1>
        </div>
        <div className="p-6 card-body">
          {loading && (
            <div className="text-center">
              <LoadingSpinner />
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            method="POST"
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
              <label
                for="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <label
                for="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <label
                for="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.password_confirmation ? "border-red-500" : ""
                }`}
                placeholder=" "
              />
              {errors.password_confirmation && (
                <p className="text-red-500 text-sm">
                  {errors.password_confirmation}
                </p>
              )}
              <label
                for="password_confirmation"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password <span className="text-red-500">*</span>
              </label>
            </div>

            {/* <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div> */}
            <div className="flex justify-between">
              <SaveButton label={id ? "Changes" : "New"} />
              <ResetButton onClick={handleReset} />
            </div>
          </form>
        </div>
        <div className=" card-footer border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300"></div>
      </div>
    </div>
  );
};

export default UserForm;
