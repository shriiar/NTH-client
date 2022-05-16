import React, { useEffect, useState } from 'react';
import MIndividualExams from '../M Individual Exams/MIndividualExams';

const MAllExams = () => {

    const [exams, setExams] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/exams/admin`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setExams(data))
    }, [])

    console.log(exams);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                exams.map(exam => <MIndividualExams key={exam._id} exam={exam} exams={exams} setExams={setExams}></MIndividualExams>)
            }
        </div>
    );
};

export default MAllExams;