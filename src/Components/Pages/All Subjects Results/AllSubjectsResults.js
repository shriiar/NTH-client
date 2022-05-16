import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    let studentObj = [{}];
    const storedStudentObj = localStorage.getItem('singleClass');
    if (storedStudentObj) {
        studentObj = JSON.parse(storedStudentObj);
    }
    console.log(studentObj);

    useEffect(() => {
        fetch(`http://localhost:5000/subjects?className=${studentObj[0]?.className}&batch=${studentObj[0]?.batch}&group=${studentObj[0]?.group}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSubjects(data))
    }, [student])

    console.log(studentObj[0]?.className, studentObj[0]?.batch, studentObj[0]?.group);
    let subjects = allSubjects[0]?.subjects;

    console.log(subjects);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allSubjects[0]?.subjects.map(subject => <IndividualSubjectREsults key={subject._id} subject={subject}></IndividualSubjectREsults>)
            }
        </div>
    );
};

export default AllSubjectsResults;