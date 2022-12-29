import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { GoComment} from 'react-icons/go';
import { MdSubdirectoryArrowLeft } from 'react-icons/md';

const SingleCompleted = ({task, refetch}) => {
    const {_id,title, image} = task;
    const handleDelete = (id) => {
        fetch(`https://task-server-main.vercel.app/tasks/${id}`, {
        method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        })
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
    return (
        <div className='w-full flex dark:bg-sky-500 dark:text-white bg-sky-100 rounded-md justify-between items-center my-5 p-3'>
            <div>
                <img className='w-12 h-12 rounded-md' src={image} alt="" />
            </div>
            <h2>{title}</h2>
            <div className='flex justify-end gap-3'>
            <button className='text-xl  p-2 rounded-md hover:text-sky-900'><GoComment></GoComment></button>
            <button onClick={() => {handleCompleted(_id)}} className='text-xl p-2 rounded-md hover:text-sky-900'><MdSubdirectoryArrowLeft></MdSubdirectoryArrowLeft></button>
            <button onClick={() => {handleDelete(_id)}} className='text-2xl  p-2 rounded-md hover:text-red-600 duration-500'><AiOutlineDelete></AiOutlineDelete></button>
            </div>
        </div>
    );
};

export default SingleCompleted;