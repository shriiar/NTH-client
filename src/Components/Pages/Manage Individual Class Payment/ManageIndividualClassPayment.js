import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleStudentPayment from '../Single Student Payment/SingleStudentPayment';

const ManageIndividualClassPayment = () => {

    const { className, batch, group } = useParams();

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

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allStudents.map(student => <SingleStudentPayment key={student._id} student={student} allStudents={allStudents} setAllStudents={setAllStudents}></SingleStudentPayment>)
            }
        </div>
    );
};

export default ManageIndividualClassPayment;