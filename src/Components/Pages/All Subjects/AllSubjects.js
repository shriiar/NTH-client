import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import IndividualAllSubject from '../Individual All Subject/IndividualAllSubject';

const AllSubjects = ({student}) => {

    const [allSubjects, setAllSubjects] = useState([]);

    console.log(student);

    useEffect(() => {
        fetch(`http://localhost:5000/subjects?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSubjects(data))
    }, [student])

    console.log(student[0]?.className, student[0]?.batch, student[0]?.group);
    let subjects = allSubjects[0]?.subjects;

    console.log(subjects);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allSubjects[0]?.subjects.map(subject => <IndividualAllSubject key={subject._id} subject={subject} student={student}></IndividualAllSubject>)
            }
        </div>
    );
};

export default AllSubjects;