import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExpandedNotice.css';
import './ExpandedNotice.scss';
import img from '../../../img/undraw_Observations.png';

const ExpandedNotice = () => {
	const { _id } = useParams();
	// console.log(_id);

	const [notice, setNotice] = useState([]);

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/myNotice?_id=${_id}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setNotice(data))
	}, [_id])

	// console.log(notice);

	return (
		<div class="center-notice px-5">
			<div class="card w-100">
				<h2>{notice[0]?.title}</h2>
				<hr />
				<div className='text-start d-flex flex-column justify-content-center h-100'>
					<p className='fs-4'>{notice[0]?.description}</p>
					<p className='fs-5'>{notice[0]?.date}</p>
				</div>
				<img src="https://i.ibb.co/f8jDJhh/01.png" className='img-fluid' width="100px" alt="" />
			</div>
		</div>
	);
};

export default ExpandedNotice;