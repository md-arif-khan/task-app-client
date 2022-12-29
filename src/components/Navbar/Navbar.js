import React, { useContext, useState } from 'react';
import {BsListTask} from 'react-icons/bs'
import {BiTask} from 'react-icons/bi';
import {MdOutlineAddTask, MdOutlineTaskAlt} from 'react-icons/md'
import { Link } from 'react-router-dom';
import Toggler from '../../Utilities/Toggler';
import { userAuth } from '../../contexts/AuthContext';



const Navbar = () => {
    const {user, signOutSystem} = useContext(userAuth);
    
    const [state, setState] = useState(false)
   
  // Replace javascript:void(0) path with your path
  const navigation = [
      {  title: "Add Task", path: "/addtask" },
      {   title:"My Task", path: "/mytasks" },
      {   title: "Completed Task", path: "/completedtask" }
  ]

    return (
        
        <nav className="bg-white dark:bg-gray-800 duration-500 dark:text-white w-full border-b md:border-0 md:static">
          <div className="items-center px-4 md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div>
                        <span className='text-2xl flex justify-center items-center font-semibold text-sky-600 dark:text-white'><span>Task</span></span>
                    </div>
                  <div className="md:hidden flex justify-end gap-3 items-center">
                      <button className="text-gray-700 dark:text-white dark:focus:border-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                      <div>
                        <Toggler></Toggler>
                      </div>
                  </div>
              </div>
              <div className={`flex-1 items-center justify-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-sky-600 dark:text-gray-200 dark:hover:text-white hover:text-sky-800">
                                    <Link className='flex justify-center items-center' to={item.path}>
                                        {item.icon}
                                        <span className='ml-2'>{item.title}</span>
                                    </Link>
                                </li>
                                
                              )
                          })
                      }
                      <li className='hidden md:flex justify-center items-center gap-3'>
                        <Toggler></Toggler>
                        
                    </li>
                  </ul>
              </div>
              
          </div>
      </nav>
    );
};

export default Navbar;