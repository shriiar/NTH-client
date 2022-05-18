import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import IndividualSubjectREsults from '../Individual Subject REsults/IndividualSubjectREsults';

const AllSubjectsResults = () => {
    const [allSubjects, setAllSubjects] = useState([]);
    const [student, setStudent] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/students?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [user])

    console.log(student);

    const { className, batch, group } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/subjects?className=${className}&batch=${batch}&group=${group}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSubjects(data))
    }, [student])

    let subjects = allSubjects[0]?.subjects;

    console.log(subjects);

    const details = {
        className: student[0]?.className,
        batch: student[0]?.batch,
        group: student[0]?.group
    }

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allSubjects[0]?.subjects.map(subject => <IndividualSubjectREsults key={subject._id} subject={subject} details={details}></IndividualSubjectREsults>)
            }
        </div>
    );
};

export default AllSubjectsResults;