import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const MIndividualExams = ({ exam, exams, setExams }) => {
    const { className, batch, group, name, topic, date, _id } = exam;

    const deleteNotice = () => {
        const url = `http://localhost:5000/exams?className=${className}&batch=${batch}&group=${group}&name=${name}&topic=${topic}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = exams.filter(item => item._id !== _id);
                    toast('Successfully Deleted');
                    setExams(remaining);
                }
            })
    }
    return (
        <div className='p-3'>
            <div className='card d-flex align-items-center justify-content-center'>
                <h1>Class {className}</h1>
                <h2>Batch {batch}</h2>
                <h3>Group {group}</h3>
                <h4>{name}</h4>
                <h4>Quiz on <span className='text-danger'>{topic}</span></h4>
                <h4>{date}</h4>
                <Button onClick={() => deleteNotice()}>Delete Quiz</Button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MIndividualExams;