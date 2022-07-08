import React, { useEffect, useState } from 'react';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';

const MyResults = ({student}) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch(`https://infinite-cliffs-52841.herokuapp.com/results?className=${student?.className}&batch=${student?.batch}&group=${student?.group}&email=${student?.email}`, {
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
                result.slice(0).reverse().map(res => <MyIndividualResult key={res._id} res={res}></MyIndividualResult>)
            }
        </div>
    );
};

export default MyResults;