import React, { useEffect, useState } from 'react';
import SingleAllSubjectResults from '../Single All Subject Results/SingleAllSubjectResults';

const IndividualSubjectAllResults = () => {
    let resultObj = [{}];
    const storedResultObj = localStorage.getItem('resultObj');
    if (storedResultObj) {
        resultObj = JSON.parse(storedResultObj);
    }
    console.log(resultObj);

    const [allResult, setAllResult] = useState([]);;
    useEffect(() => {
        fetch(`http://localhost:5000/results/admin?className=${resultObj[0]?.className}&batch=${resultObj[0]?.batch}&group=${resultObj[0]?.group}&subject=${resultObj[0]?.subject}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllResult(data))
    }, [])

    console.log(allResult);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                allResult.map(res => <SingleAllSubjectResults key={res._id}
                    res={res} allResult={allResult} setAllResult={setAllResult}></SingleAllSubjectResults>)
            }
        </div>
    );
};

export default IndividualSubjectAllResults;