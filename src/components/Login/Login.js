import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../contexts/AuthContext";
import Toggler from "../../Utilities/Toggler";

const Login = () => {
  const {emailSignIn,setLoader, googleSignUp} = useContext(userAuth)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target; 
    const email = form.email.value;
    const password = form.password.value;
    emailSignIn(email, password)
    .then(result => {
      const user = result.user;
    })
    .then(err => console.log(err))
    form.reset();
    navigate("/");
    
  }

  const handleGoogleSignUp = () => {
    googleSignUp()
    .then(result => {
      setLoader(true);
      const user = result.user;
    })
    .then(err => console.log(err))
  }
  return (
    <div className="flex bg-white text-black dark:bg-gray-800 dark:text-white flex-col items-center">
      <div className="w-full md:w-1/3 flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48">
        
        <form onSubmit={handleLogin} className="w-full mt-5 border  dark:border-gray-600 rounded-lg mx-auto">
          <h1 className="text-3xl pt-2">Login Now</h1>
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              
              <input
                name="email"
                type="email"
                placeholder="Write your email address"
                className="w-full dark:bg-gray-500 dark:ring-gray-500 dark:border-gray-500 dark:placeholder:text-white dark:text-white bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              
              <input
                name="password"
                type="password"
                placeholder="password"
                className="w-full  dark:bg-gray-500 dark:ring-gray-500 dark:border-gray-500 dark:placeholder:text-white dark:text-white bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <button className="block bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Log in
            </button>

            <div className="flex justify-center items-center relative">
              <span className="h-px bg-gray-300 dark:bg-gray-700 absolute inset-x-0"></span>
              <span className="bg-white dark:bg-gray-700 text-gray-400 text-sm relative px-4">
                Log in with Google
              </span>
            </div>

            <button onClick={handleGoogleSignUp} className="flex justify-center items-center dark:bg-gray-500 dark:text-white dark:border-gray-500 bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3">
              <svg
                className="w-5 h-5 shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                  fill="#34A853"
                />
                <path
                  d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="flex justify-center rounded-b-md items-center dark:bg-gray-500 bg-gray-100 p-4">
            <p className="text-gray-500  dark:text-white text-sm text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-500 dark:text-sky-400 hover:text-indigo-600  active:text-indigo-700 transition duration-100"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
