import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../contexts/AuthContext";
import Toggler from "../../Utilities/Toggler";

const Signup = () => {
  const {emailSignup, setLoader, updateUser } = useContext(userAuth);
  const navigate = useNavigate()
  const handleEmailSignup = (e) => {
    e.preventDefault(); 
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    emailSignup(email, password)
    .then(result => {
      console.log(result)
      const currentUser = result.user;
      updateUser(name)
      .then(() => {
        setLoader(true);
      })
      .catch(() => {})
    })
    .catch(error => console.log(error.message))
    
    form.reset()
    navigate("/")
  }
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-800 flex-col items-center">
      <div className="w-full px-5 md:px-0 md:w-1/3 mx-auto flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48">

       
        <form onSubmit={handleEmailSignup} className="w-full border mt-5 dark:border-gray-700 rounded-lg mx-auto">
          <h1 className="text-3xl text-black dark:text-white pt-2">Sign Up Now</h1>
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full  dark:bg-gray-500 dark:ring-gray-500 dark:border-gray-500 dark:placeholder:text-white dark:text-white bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full  dark:bg-gray-500 dark:ring-gray-500 dark:border-gray-500 dark:placeholder:text-white dark:text-white bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full  dark:bg-gray-500 dark:ring-gray-500 dark:border-gray-500 dark:placeholder:text-white dark:text-white bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <button type="submit" className="block bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white  text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Registration
            </button>
          </div>

          <div className="flex justify-center items-center dark:bg-gray-500 bg-gray-100 p-4">
            <p className="text-gray-500 dark:text-white text-sm text-center">
              Already have an Account?{" "}
              <Link
                to="/login"
                className="text-indigo-500 dark:text-sky-400 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
