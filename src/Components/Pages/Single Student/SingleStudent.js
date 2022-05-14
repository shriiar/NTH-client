import React from 'react';

const SingleStudent = (props) => {
    const { name, father, mother, className, batch, group, email } = props.student;
    return (
        <div className='row'>
            <div className='col-6 card d-flex justify-content-center'>
                <h1>{name}</h1>
                <h2>Father's Name: {father}</h2>
                <h2>Mothers's Name: {mother}</h2>
                <h3>Class: {className}</h3>
                <h3>Batch: {batch}</h3>
                <h3>Group: {group}</h3>
                <h3>{email}</h3>
            </div>
            <div className='col-6 card d-flex justify-content-center'>
                <button className='mb-5'>Update {name}'s Profile</button>
                <button>Delete {name}'s Profile</button>
            </div>
        </div>
    );
};

export default SingleStudent;