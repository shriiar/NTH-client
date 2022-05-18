import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleAllSubjectResults from '../Single All Subject Results/SingleAllSubjectResults';

const IndividualSubjectAllResults = () => {
    
    const {className, batch, group, subject} = useParams()
    const [allResult, setAllResult] = useState([]);;
    useEffect(() => {
        fetch(`http://localhost:5000/results/admin?className=${className}&batch=${batch}&group=${group}&subject=${subject}`, {
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