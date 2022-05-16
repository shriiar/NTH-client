import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddIndividualResult = (props) => {
    const navigate = useNavigate();
    const { name, father, mother, className, batch, group, email } = props.student;

    const goTo = () => {
        navigate(`/addStudentResult/${email}`);
    }
    return (
        <div className='col-6 card d-flex justify-content-center'>
            <h1>{name}</h1>
            <h2>Father's Name: {father}</h2>
            <h2>Mothers's Name: {mother}</h2>
            <h3>Class: {className}</h3>
            <h3>Batch: {batch}</h3>
            <h3>Group: {group}</h3>
            <h3>{email}</h3>
            <button onClick={() => goTo()} className='w-50 mx-auto'>Add Result</button>
        </div>
    );
};

export default AddIndividualResult;