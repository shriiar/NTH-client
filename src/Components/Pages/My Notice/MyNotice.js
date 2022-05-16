import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import MyIndividualNotice from '../My Individual Notice/MyIndividualNotice';

const MyNotice = () => {
    const [notice, setNotice] = useState([]);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');
    let noticeObj = [{}];
    const storedNoticeObj = localStorage.getItem('studentObj');
    if (storedNoticeObj) {
        noticeObj = JSON.parse(storedNoticeObj);
    }
    console.log(noticeObj);
    useEffect(() => {
        fetch(`http://localhost:5000/notice?className=${noticeObj[0]?.className}&batch=${noticeObj[0]?.batch}&group=${noticeObj[0]?.group}&date=${formattedDate}`, {
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