import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ResultsForClass = () => {
    const navigate = useNavigate();

    const toExams = () => {
        navigate('/addResultAllClass');
    }
    const toResults = () => {
        navigate('/manageResults');
    }
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2'>
            <div className='p-3'>
                <h2>Add Result</h2>
                <Button onClick={() => toExams()}>Add</Button>
            </div>
            <div className='p-3'>
                <h2>Manage Results</h2>
                <Button onClick={() => toResults()}>Manage</Button>
            </div>
        </div>
    );
};

export default ResultsForClass;