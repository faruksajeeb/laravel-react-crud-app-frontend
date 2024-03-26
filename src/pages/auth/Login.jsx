import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";
import { ImEye } from "react-icons/im";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaSignInAlt } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner";


const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: 'mehedi.hasan@gmail.com',
    password: '12345678#a'
  });

  const [errors, setErrors] = useState({});
  const {setUser,setToken} = useStateContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error message for the current input field
    setErrors({
      ...errors,
      [name]: ''
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    let errors = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    
    setErrors(errors);
   
    // If no errors, submit form
    if (Object.keys(errors).length === 0) {
      // Form submission logic
      // Make HTTP POST request using Axios
      // console.log(formData);
      setLoading(true);
      axiosClient.post('/login', formData)
      .then(({data}) => {
        // Handle success
        console.log(data.token)
        setUser(data.user)
        setToken(data.token)
      })
      .catch(error => {
        // Handle error
        const response = error.response;
        if(response && response.status===422){
          if(response.data.errors){
            setErrors(response.data.errors);
          }else{
            setErrors({
              password: response.data.message
            });
          }          
        }
        console.error('Error submitting form:', error);

      }).finally(()=> {
          setLoading(false);
      });
      
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-3xl uppercase font-bold leading-9 tracking-tight text-purple-800">
            Sign In
          </h2>
        </div>

        <div className={`mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-solid border-gray-200 border-2 rounded-md p-10 bg-white shadow-md  transition-all duration-500 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-600"
              >
                Email address <span className="text-red-500">*</span>
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Enter User Email"
                
                className={`mt-1 p-2 border border-2  ring-purple-400 rounded-md w-full focus:outline-none focus:ring ${errors.email ? 'border-red-500' : ''}`}
                />
                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                
              </div>
            </div>

            
            <div className="mb-4">
              <div className="flex  items-center justify-between">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password <span className="text-red-500">*</span></label>
              <div className="text-sm float">
                  <Link                    
                    className="font-semibold text-purple-600 hover:text-purple-500"
                    to = {'/forgot_password'}
                  >
                    Forgot password?
                  </Link>
                </div>
                </div>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" 
                value={formData.password} 
                onChange={handleChange} 
                placeholder="Enter your password"
                className={`mt-1 p-2 border border-2 ring-purple-400 rounded-md w-full focus:outline-none focus:ring ${errors.password ? 'border-red-500' : ''}`} />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-10 text-gray-500" onClick={togglePasswordVisibility}>
                  {showPassword ? <ImEye /> : <PiEyeClosedBold />}                 
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              
           
              <button
                type="submit"
                className={`flex  justify-center  w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 border-b-4 border-purple-800 hover:border-purple-600 rounded  ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading && <LoadingSpinner />} 
                {loading ? ' Siging in...' : 'Sign In'}
                <FaSignInAlt className={`ml-2 my-1`}/>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Not registered? {" "}
             <Link
              href="#"
              className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
              to={'/register'}
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
