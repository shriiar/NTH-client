import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleStudent from '../Single Student/SingleStudent';

const ManageInvididualClass = () => {

    const { className, batch, group } = useParams();

    console.log(className, batch, group);

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
                allStudents.map(student => <SingleStudent key={student._id} student={student} allStudents={allStudents} setAllStudents={setAllStudents}></SingleStudent>)
            }
        </div>
    );
};

export default ManageInvididualClass;