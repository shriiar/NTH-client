import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageTasks = () => {

    const navigate = useNavigate();

    const goToClass = (obj) => {
        navigate(`/manageIndividualClassByTask/${obj?.className}/${obj?.batch}/${obj?.group}`);
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div className='p-3'>
                <h2>Class 5 Bangla</h2>
                <Button onClick={() => goToClass({ className: "5", batch: "bangla", group: "under9" })}>Manage Class 5 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 5 English</h2>
                <Button onClick={() => goToClass({ className: "5", batch: "english", group: "under9" })}>Manage Class 5 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 6 Bangla</h2>
                <Button onClick={() => goToClass({ className: "6", batch: "bangla", group: "under9" })}>Manage Class 6 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 6 English</h2>
                <Button onClick={() => goToClass({ className: "6", batch: "english", group: "under9" })}>Manage Class 6 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 7 Bangla</h2>
                <Button onClick={() => goToClass({ className: "7", batch: "bangla", group: "under9" })}>Manage Class 7 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 7 English</h2>
                <Button onClick={() => goToClass({ className: "7", batch: "english", group: "under9" })}>Manage Class 7 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 8 Bangla</h2>
                <Button onClick={() => goToClass({ className: "8", batch: "bangla", group: "under9" })}>Manage Class 8 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 8 English</h2>
                <Button onClick={() => goToClass({ className: "8", batch: "english", group: "under9" })}>Manage Class 8 Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 9 Bangla</h2>
                <Button onClick={() => goToClass({ className: "9", batch: "bangla", group: "science" })}>Manage Class 9 Science Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 9 English</h2>
                <Button onClick={() => goToClass({ className: "9", batch: "english", group: "science" })}>Manage Class 9 Science Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 9 Bangla</h2>
                <Button onClick={() => goToClass({ className: "9", batch: "bangla", group: "commerce" })}>Manage Class 9 Commerce Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 9 English</h2>
                <Button onClick={() => goToClass({ className: "9", batch: "english", group: "commerce" })}>Manage Class 9 Commerce Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 10 Bangla</h2>
                <Button onClick={() => goToClass({ className: "10", batch: "bangla", group: "science" })}>Manage Class 10 Science Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 10 English</h2>
                <Button onClick={() => goToClass({ className: "10", batch: "english", group: "science" })}>Manage Class 10 Science Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 10 Bangla</h2>
                <Button onClick={() => goToClass({ className: "10", batch: "bangla", group: "commerce" })}>Manage Class 10 Commerce Tasks</Button>
            </div>
            <div className='p-3'>
                <h2>Class 10 English</h2>
                <Button onClick={() => goToClass({ className: "10", batch: "english", group: "commerce" })}>Manage Class 10 Commerce Tasks</Button>
            </div>
        </div>
    );

};

export default ManageTasks;