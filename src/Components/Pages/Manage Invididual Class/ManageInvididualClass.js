import React, { useEffect, useState } from 'react';
import SingleStudent from '../Single Student/SingleStudent';

const ManageInvididualClass = () => {

    let subjectObj = [];
    const storedSubjectObj = localStorage.getItem('singleClass');
    if (storedSubjectObj) {
        subjectObj = JSON.parse(storedSubjectObj);
    }

    const { className, batch, group } = subjectObj[0];

    const [allStudents, setAllStudents] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/students?className=${className}&batch=${batch}&group=${group}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllStudents(data))
    }, [])

    console.log(allStudents);

    return (
        <div className='row row-cols-1 row-cols-md-1 row-cols-lg-1'>
            {
                allStudents.map(student => <SingleStudent key={student._id} student={student}></SingleStudent>)
            }
        </div>
    );
};

export default ManageInvididualClass;