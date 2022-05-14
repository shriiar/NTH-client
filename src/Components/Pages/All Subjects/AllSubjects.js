import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import IndividualAllSubject from '../Individual All Subject/IndividualAllSubject';

const AllSubjects = () => {

    const [allSubjects, setAllSubjects] = useState([]);

    let studentObj = [];
    const storedStudentObj = localStorage.getItem('studentObj');
    if (storedStudentObj) {
        studentObj = JSON.parse(storedStudentObj);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/subjects?className=${studentObj[0]?.className}&batch=${studentObj[0]?.batch}&group=${studentObj[0]?.group}`)
            .then(res => res.json())
            .then(data => setAllSubjects(data))
    }, [])

    console.log(allSubjects);
    let subjects = allSubjects[0]?.subjects;

    console.log(subjects);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allSubjects[0]?.subjects.map(subject => <IndividualAllSubject key={subject._id} subject={subject}></IndividualAllSubject>)
            }
        </div>
    );
};

export default AllSubjects;