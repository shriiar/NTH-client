import React, { useEffect, useState } from 'react';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import ManageIndividualNotice from '../Manage Individual Notice/ManageIndividualNotice';

const ManageNotice = () => {
	const [notice, setNotice] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/notice/admin`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setNotice(data))
	}, [])

	// console.log(notice);
	return (
		<div>
			<HelmetTitle title={'Manage Notice'}></HelmetTitle>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-start'>
				{
					notice.slice(0).reverse().map(noc => <ManageIndividualNotice key={noc._id} noc={noc} notice={notice} setNotice={setNotice}></ManageIndividualNotice>)
				}
			</div>
		</div>
	);
};

export default ManageNotice;