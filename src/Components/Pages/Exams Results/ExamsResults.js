import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ExamsResults = () => {

    const navigate = useNavigate();

    const toExams = () => {
        navigate('/exams');
    }
    const toResults = () => {
        navigate('/addResultAllClass');
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <div className='p-3'>
                <h2>Exams</h2>
                <Button onClick={() => toExams()}>Manage Or Add</Button>
            </div>
            <div className='p-3'>
                <h2>Results</h2>
                <Button onClick={() => toResults()}>Manage Or Add</Button>
            </div>
        </div>
    );
};

export default ExamsResults;