import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SingleSubjectTask from '../Single Subject Task/SingleSubjectTask';

const SingleSubjectTasks = () => {
    const { className, batch, group, subject } = useParams();
    console.log(className, group, batch, subject);

    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/subWAcc?className=${className}&batch=${batch}&group=${group}&subject=${subject}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    console.log(task);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
            {
                task?.slice(0).reverse().map(item => <SingleSubjectTask key={item._id} item={item} task={task} setTask={setTask}></SingleSubjectTask>)
            }
        </div>
    );
};

export default SingleSubjectTasks;