import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Exams = () => {

    const navigate = useNavigate();

    const toSet = () => {
        navigate('/setExams');
    }
    const toManage = () => {
        navigate('/ManageExams');
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <div className='p-3'>
                <h2>Set Exam</h2>
                <Button onClick={() => toSet()}>Add</Button>
            </div>
            <div className='p-3'>
                <h2>Manage All Exams</h2>
                <Button onClick={() => toManage()}>Manage</Button>
            </div>
        </div>
    );
};

export default Exams;