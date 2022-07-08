import React, { useEffect, useState } from 'react';
import ManageIndividualNotice from '../Manage Individual Notice/ManageIndividualNotice';

const ManageNotice = () => {
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        fetch(`https://infinite-cliffs-52841.herokuapp.com/notice/admin`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setNotice(data))
    }, [])

    console.log(notice);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                notice.slice(0).reverse().map(noc => <ManageIndividualNotice key={noc._id} noc={noc} notice={notice} setNotice={setNotice}></ManageIndividualNotice>)
            }
        </div>
    );
};

export default ManageNotice;