import React from 'react';

const SingleSubjectVideo = () => {

    let subjectObj = [];
    const storedSubjectObj = localStorage.getItem('singleSubjectVideo');
    if (storedSubjectObj) {
        subjectObj = JSON.parse(storedSubjectObj);
    }

    // console.log(subjectObj);

    return (
        <div>
            <h1>{subjectObj[0]?.subject}</h1>
            <h1>{subjectObj[0]?.name}</h1>
            <iframe className='w-100' src={`${subjectObj[0]?.videoUrl}`} width="1280" height="860" allow="autoplay"></iframe>
        </div>
    );
};

export default SingleSubjectVideo;