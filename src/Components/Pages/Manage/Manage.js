import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Manage = () => {

    const navigate = useNavigate();

    const tomanageUser = () => {
        navigate('/manageUsers');
    }
    const toAddTask = () => {
        navigate('/addTasks');
    }
    const toNotice = () => {
        navigate('/Notice');
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div className='p-3'>
                <h2>All users</h2>
                <Button onClick={() => tomanageUser()}>Manage Users</Button>
            </div>
            <div className='p-3'>
                <h2>Task & Record</h2>
                <Button onClick={() => toAddTask()}>Add Home Works</Button>
            </div>
            <div className='p-3'>
                <h2>Notice</h2>
                <Button onClick={() => toNotice()}>Add Notice</Button>
            </div>
        </div>
    );
};

export default Manage;