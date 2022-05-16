import React from 'react';

const MyIndividualResult = (props) => {
    const { className, group, batch, date, topic, mark, fmark, subject } = props.res;
    return (
        <div className='p-3'>
            <div className='card d-flex justify-content-center'>
                <h1>{subject}</h1>
                <h3>{topic}</h3>
                <h3>Marks: <span className='text-danger'>{mark} / {fmark}</span></h3>
                <h4>{date}</h4>
            </div>
        </div>
    );
};

export default MyIndividualResult;