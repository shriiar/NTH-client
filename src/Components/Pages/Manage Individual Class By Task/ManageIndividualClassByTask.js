import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleClassTasks from '../Single Class Tasks/SingleClassTasks';

const ManageIndividualClassByTask = () => {

    const { className, batch, group } = useParams();
    const [allSubjects, setAllSubjects] = useState([]);

    console.log(className, batch, group, `http://localhost:5000/subjects?className=${className}&batch=${batch}&group=${group}`);

    useEffect(() => {
        fetch(`http://localhost:5000/subjects?className=${className}&batch=${batch}&group=${group}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSubjects(data))
    }, [])

    let subjects = allSubjects[0]?.subjects;

    console.log(allSubjects[0]);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allSubjects[0]?.subjects.map(subject => <SingleClassTasks key={subject._id} subject={subject} className={className} batch={batch} group={group}></SingleClassTasks>)
            }
        </div>
    );

};

export default ManageIndividualClassByTask;