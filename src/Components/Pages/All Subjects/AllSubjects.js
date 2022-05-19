import { async } from '@firebase/util';
import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import IndividualAllSubject from '../Individual All Subject/IndividualAllSubject';

const AllSubjects = () => {

    const [allSubjects, setAllSubjects] = useState([]);
    const [student, setStudent] = useState([]);
    const [user] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');
    const navigate = useNavigate();

    let myArray = formattedDate.split(' ');
    console.log(myArray);

    let newDate = myArray[1][0], newMonth = myArray[0], newYear = parseInt(myArray[2]);
    if (myArray[1].length > 2) {
        newDate += myArray[1][1];
    }

    newDate = parseInt(newDate);

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

    if (student[0]?.due === 2 && ((newDate >= 15 && student[0]?.payMonth === myArray[0]) || (student[0]?.payMonth !== myArray[0]) || (student[0]?.payYear !== newYear))) {
        signOut(auth);
        navigate('/login');
    }

    if ((student[0]?.paid === false && student[0]?.due === null && newDate >= 1 && student[0]?.role !== 'admin')) {
        const updatedUser =
            { name: student[0]?.name, father: student[0]?.father, mother: student[0]?.mother, className: student[0]?.className, batch: student[0]?.batch, group: student[0]?.group, email: student[0]?.email, img: student[0]?.img, paid: false, lastPaid: student[0]?.lastPaid, due: 1, payMonth: myArray[0], payYear: newYear }

        console.log(updatedUser);

        fetch(`http://localhost:5000/students/${student[0]?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // console.log(updatedUser);
            })
    }

    if (student[0]?.paid === false && student[0]?.due === 1 && student[0]?.payMonth !== myArray[0] && newDate >= 1) {
        const updatedUser =
            { name: student[0]?.name, father: student[0]?.father, mother: student[0]?.mother, className: student[0]?.className, batch: student[0]?.batch, group: student[0]?.group, email: student[0]?.email, img: student[0]?.img, paid: student[0]?.paid, lastPaid: student[0]?.lastPaid, due: 2, payMonth: myArray[0], payYear: newYear }

        console.log(updatedUser);

        fetch(`http://localhost:5000/students/${student[0]?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

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

    // console.log(student[0]?.className, student[0]?.batch, student[0]?.group);
    // let subjects = allSubjects[0]?.subjects;

    // console.log(subjects);
    console.log(student);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allSubjects[0]?.subjects.map(subject => <IndividualAllSubject key={subject._id} subject={subject} student={student}></IndividualAllSubject>)
            }
        </div>
    );
};

export default AllSubjects;