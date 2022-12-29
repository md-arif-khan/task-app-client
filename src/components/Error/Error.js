import React from "react";
import { Link } from "react-router-dom";
import Toggler from "../../Utilities/Toggler";

const Error = () => {
  return (
    <div className="bg-white min-h-screen duration-500 dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center">
          <Toggler></Toggler>
          <h1 className="text-5xl font-semibold mt-5 dark:text-sky-50 text-sky-500">Task Manager.</h1>

          <p className="text-sky-500 dark:text-sky-50  text-sm md:text-base font-semibold uppercase mb-4">
            That’s a 404
          </p>
          <h1 className="text-gray-800 dark:text-sky-50 text-2xl md:text-3xl font-bold text-center mb-2">
            Page not found
          </h1>

          <p className="max-w-screen-md dark:text-white text-gray-500 md:text-lg text-center mb-12">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/mytasks"
            className="inline-block bg-sky-200 hover:text-white hover:bg-sky-700 focus-visible:ring ring-sky-300 text-black active:text-gray-700 text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
