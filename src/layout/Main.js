import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen duration-500">
      <Navbar></Navbar>
      <div className="w-full mt-5 bg-white dark:bg-gray-800 duration-500 md:w-1/2 md:mx-auto px-5 md:px-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
