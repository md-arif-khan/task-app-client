import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userAuth } from '../../contexts/AuthContext';
import SingleCompleted from './singleCompleted/SingleCompleted';

const Completedtask = () => {
    const {user} =  useContext(userAuth);
    const {data: allTasks = [],refetch } = useQuery({
        queryKey:["tasks", user?.email],
        queryFn: () => fetch('https://task-server-main.vercel.app/tasks')
        .then(res => res.json())

    })
    const tasks = allTasks?.filter(task => task.complete === true && task?.email === user?.email);;
    return (
        <div>
            <h1 className='text-sky-500 text-3xl font-semibold'>Completed Tasks</h1>
            {
                tasks.map(task => <SingleCompleted key={task.id} refetch={refetch} task = {task}></SingleCompleted>)
            }
        </div>
    );
};

export default Completedtask;