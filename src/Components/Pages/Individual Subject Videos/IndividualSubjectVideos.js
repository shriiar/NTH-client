import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleSubjectVideos from '../Single Subject Videos/SingleSubjectVideos';

const IndividualSubjectVideos = ({student}) => {

    const subjectName = useParams();
    const [subjectsVid, setSubjectsVid] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/subWAcc?className=${student?.className}&batch=${student?.batch}&group=${student?.group}&subject=${student?.subjectName}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setSubjectsVid(data))
    }, [])

    console.log(subjectsVid);

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                subjectsVid.map(subjectVid => <SingleSubjectVideos key={subjectVid._id} subjectVid={subjectVid}></SingleSubjectVideos>)
            }
        </div>
    );
};

export default IndividualSubjectVideos;