import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Notice = () => {
    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <div className='p-3'>
                <h2>Add Notice</h2>
                <Button onClick={() => goTo('/addNotice')}>Add</Button>
            </div>
            <div className='p-3'>
                <h2>Manage Notice</h2>
                <Button onClick={() => goTo('/manageNotice')}>Manage</Button>
            </div>
        </div>
    );
};

export default Notice;