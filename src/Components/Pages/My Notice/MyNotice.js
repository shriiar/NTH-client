import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import MyIndividualNotice from '../My Individual Notice/MyIndividualNotice';

const MyNotice = ({ student }) => {

    console.log(student);
    const [notice, setNotice] = useState([]);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    useEffect(() => {
        fetch(`http://localhost:5000/notice?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}&date=${formattedDate}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setNotice(data))
    }, [])

    console.log(notice);
    return (
        <div className='row row-cols-1 row-cols-md-1 row-cols-lg-1'>
            {
                notice.map(noc => <MyIndividualNotice key={noc._id} noc={noc}></MyIndividualNotice>)
            }
        </div>
    );
};

export default MyNotice;