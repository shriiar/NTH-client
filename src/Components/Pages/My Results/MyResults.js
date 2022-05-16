import React, { useEffect, useState } from 'react';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';

const MyResults = () => {
    const [result, setResult] = useState([]);

    let studentObj = [{}];
    const storedStudentObj = localStorage.getItem('studentObj');
    if (storedStudentObj) {
        studentObj = JSON.parse(storedStudentObj);
    }
    console.log(studentObj);
    useEffect(() => {
        fetch(`http://localhost:5000/results?className=${studentObj[0]?.className}&batch=${studentObj[0]?.batch}&group=${studentObj[0]?.group}&email=${studentObj[0]?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setResult(data))
    }, [])

    console.log(result);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                result.map(res => <MyIndividualResult key={res._id} res={res}></MyIndividualResult>)
            }
        </div>
    );
};

export default MyResults;