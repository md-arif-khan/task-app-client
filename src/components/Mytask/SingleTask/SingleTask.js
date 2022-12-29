import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import { BiCheckCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const SingleTask = ({task, refetch}) => {
    const navigate = useNavigate();
    const {_id,title, description, image} = task;
    const handleDelete = (id) => {
        fetch(`https://task-server-main.vercel.app/tasks/${id}`, {
        method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        })
    }
    const handleUpdate=()=>{
        navigate('/update',{state:task});
    }
    const handleCompleted = (id) => {
        fetch(`https://task-server-main.vercel.app/tasks/${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        });
    }
    // console.log(img)
    return (
        <div className='w-full dark:bg-sky-600 dark:text-white flex bg-sky-100 rounded-md justify-between items-center my-5 p-3'>
            <div>
                <img className='w-12 h-12 rounded-md' src={image} alt="" />
            </div>
            <h2>{title}</h2>
            <div className='flex justify-end gap-3'>
            <button onClick={handleUpdate} className='text-xl  p-2 rounded-md hover:text-sky-900'><FiEdit></FiEdit></button>
            <button onClick={() => {handleCompleted(_id)}} className='text-2xl p-2 rounded-md hover:text-sky-900'><BiCheckCircle></BiCheckCircle></button>
            <button onClick={() => {handleDelete(_id)}} className='text-2xl  p-2 rounded-md hover:text-red-600 duration-500'><AiOutlineDelete></AiOutlineDelete></button>
            </div>
        </div>
    );
};

export default SingleTask;