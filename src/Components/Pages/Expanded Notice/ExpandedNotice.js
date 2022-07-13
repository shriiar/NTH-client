import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExpandedNotice.css';

const ExpandedNotice = () => {
	const { _id } = useParams();
	console.log(_id);

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

	console.log(notice);

	return (
		<div className='card'>
			<h1>{notice[0]?.title}</h1>
			<h2>{notice[0]?.description}</h2>
			<h4>{notice[0]?.date}</h4>
		</div>
	);
};

export default ExpandedNotice;