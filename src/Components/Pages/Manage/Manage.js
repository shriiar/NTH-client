import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Manage = () => {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div className='p-3'>
                <h2>All users</h2>
                <Button onClick={() => goTo('/manageUsers')}>Manage Users</Button>
            </div>
            <div className='p-3'>
                <h2>Add / Manage Task</h2>
                <Button onClick={() => goTo('/taskRecords')}>Task</Button>
            </div>
            <div className='p-3'>
                <h2>Notice</h2>
                <Button onClick={() => goTo('/Notice')}>Notice</Button>
            </div>
            <div className='p-3'>
                <h2>Exams & Results</h2>
                <Button onClick={() => goTo('/examsResults')}>Add Or Manage</Button>
            </div>
        </div>
    );
};

export default Manage;