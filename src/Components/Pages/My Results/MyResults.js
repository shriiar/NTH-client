import React, { useEffect, useState } from 'react';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';

const MyResults = ({student}) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/results?className=${student?.className}&batch=${student?.batch}&group=${student?.group}&email=${student?.email}`, {
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