import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TaskRecords = () => {
    const navigate = useNavigate();
    
    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <div className='p-3'>
                <h2>Add Task</h2>
                <Button onClick={() => goTo('/addTasks')}>Add</Button>
            </div>
            <div className='p-3'>
                <h2>Manage Task</h2>
                <Button onClick={() => goTo('/manageTask')}>Manage</Button>
            </div>
        </div>
    );
};

export default TaskRecords;