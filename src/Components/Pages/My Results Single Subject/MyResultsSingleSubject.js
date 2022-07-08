import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';

const MyResultsSingleSubject = ({ student }) => {
    const [result, setResult] = useState([]);

    const { subject } = useParams();
    console.log(student, subject);

    useEffect(() => {
        fetch(`https://infinite-cliffs-52841.herokuapp.com/results?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}&email=${student[0]?.email}&subject=${subject}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
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

export default MyResultsSingleSubject;