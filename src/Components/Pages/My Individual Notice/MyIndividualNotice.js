import React from 'react';

const MyIndividualNotice = (props) => {
    const {description, className, group, batch, date} = props.noc;
    return (
        <div className='card'>
            <h1>{description}</h1>
            <h3>{date}</h3>
        </div>
    );
};

export default MyIndividualNotice;