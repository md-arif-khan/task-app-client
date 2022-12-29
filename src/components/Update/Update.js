import React from 'react';
import { useForm } from 'react-hook-form';
import {useLocation} from 'react-router-dom';

const Update = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
 
    const location = useLocation();
    
    const {description,_id,title}=location.state
    const onSubmit = data =>{
        console.log(data.description)
        // fetch(`https://task-server-main.vercel.app/task/${_id}`,{
        //     method:'PUT',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(data.description)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     alert('update successfully')
        // })
     }
    return (
        <div>
           <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
  
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Update Your Task</h2>

    
    </div>
  

   
    <form onSubmit={handleSubmit(onSubmit)} class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
     
      <div class="sm:col-span-2">
        <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
        <textarea defaultValue={title} id="address"  {...register("description")} className="w-full h-52 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
      </div>

      <div class="sm:col-span-2 flex justify-between items-center">
        <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

        <span class="text-gray-500 text-sm">*Required</span>
      </div>

      <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
    </form>
   
  </div>
</div>
        </div>
    );
};

export default Update;