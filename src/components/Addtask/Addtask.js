import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../contexts/AuthContext";

const Addtask = () => {
  const imgbbToken = '932c9c25c949eb48a050f0df2df946b1';
  const {user} = useContext(userAuth);
  const email = user.email;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleTaskSubmit = (data, e) => {
    e.preventDefault()
    const form = e.target;
    const title = data.title;
    const description = data.description;
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbToken}`
    fetch(url, {
      method: "POST",
      body: formData
  })
  .then(res => res.json())
  .then(result => {
    const imgURL = result.data.url;
    const task = {
      title, description, image: imgURL, complete: false,
    }
    if(result.success){
      fetch('https://task-server-main.vercel.app/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      .then(res => res.json())
      .then(result => {
        navigate('/');
        form.reset();
        toast("added Task successfully");
      })
    }
  })

  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleTaskSubmit)} className="w-full border border-teal-400 dark:border-gray-600 rounded-lg mx-auto">
        <h1 className="text-center font-semibold text-3xl dark:text-white mt-5">Your Simple Task</h1>
        <div className="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <input
              name="title"
              {...register("title")}
              placeholder="Task Title"
              type="text"
              className="w-full dark:bg-gray-600 dark:border-gray-800 dark:text-white bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div>
            
            <textarea
              {...register("description")}
              name="description"
              type="text"
              placeholder="Task Description"
              className="w-full dark:bg-gray-600 dark:border-gray-800 dark:text-white  bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            
          <label

                        className="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300  dark:bg-gray-600 dark:border-gray-800 dark:text-white bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        tabIndex="0">
                        <span htmlFor="photo-dropbox" className="flex items-center space-x-2">
                            <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                <path
                                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></path>
                                <path
                                    d="M80,128a80,80,0,1,1,144,48"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></path>
                                <polyline
                                    points="118.1 161.9 152 128 185.9 161.9"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></polyline>
                                <line
                                    x1="152"
                                    y1="208"
                                    x2="152"
                                    y2="128"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="24"></line>
                            </svg>
                            <span className="text-xs font-medium dark:text-gray-50 text-gray-600">
                                Drop Your Task Image, or
                                <span className="text-blue-600 dark:text-sky-400 underline ml-1">photo</span>
                            </span>
                        </span>
                        <input {...register("image")} id="photo-dropbox" type="file" className="sr-only" />
                    </label>
          </div>

          <button type="submit" className="block bg-sky-500 dark:bg-gray-600 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Submit Task
          </button>

          </div>

        
      </form>
    </div>
  );
};

export default Addtask;
