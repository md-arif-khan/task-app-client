import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../../contexts/AuthContext';
import SingleTask from './SingleTask/SingleTask';

const Mytask = () => {
    const {user, signOutSystem} = useContext(userAuth);
    const navigate = useNavigate();
    // const tasks = [
    //     {id: '_1', name: "Hand writen", description: "This is the first task", photo: "https://cdn-icons-png.flaticon.com/512/906/906334.png"},
    //     {id: '_2', name: "Hand writen", description: "This is the second task", photo: "https://img.freepik.com/premium-vector/task-mark-note-book-logo-design-icon-symbol_171487-1571.jpg?w=2000"}
    // ]

    const {data: allTasks = [],refetch } = useQuery({
        queryKey:["tasks", user?.email],
        queryFn: () => fetch('https://task-server-main.vercel.app/tasks')
        .then(res => res.json())

    })
    const tasks = allTasks?.filter(task => task.complete === false && task?.email === user?.email);

    const handleLogout = () => {
        signOutSystem()
        .then( () => {

        })
        .then( () => {})
        navigate("/login");
    }
    return (
        <div>
            <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold text-sky-500'>My Tasks</h1>
           
            </div>
            {
                tasks.map(task => <SingleTask refetch={refetch} key={task._id} task={task}></SingleTask>)
            }

            <div className='text-center mt-5'>
                
                
            </div>
        </div>
    );
};

export default Mytask;