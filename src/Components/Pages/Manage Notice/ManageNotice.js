import React, { useEffect, useState } from 'react';
import ManageIndividualNotice from '../Manage Individual Notice/ManageIndividualNotice';

const ManageNotice = () => {
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/notice/admin`, {
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
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                notice.map(noc => <ManageIndividualNotice key={noc._id} noc={noc} notice={notice} setNotice={setNotice}></ManageIndividualNotice>)
            }
        </div>
    );
};

export default ManageNotice;