import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const MyQuiz = ({student}) => {
    console.log(student);
    const [exam, setExam] = useState([]);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    useEffect(() => {
        fetch(`http://localhost:5000/exams?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}&date=${formattedDate}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setExam(data))
    }, [])

    console.log(exam);
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <iframe src={exam[exam.length - 1]?.formLink} className="w-100" height="1887" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
};

export default MyQuiz;