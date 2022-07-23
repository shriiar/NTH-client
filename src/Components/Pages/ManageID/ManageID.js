import React, { useEffect, useState } from 'react';
import SingleID from '../SingleID/SingleID';
import './ManageID.css';

const ManageID = () => {

	const [ID, setID] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/studentID`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				const match = data.filter(item => item.nameID.toLowerCase().includes(searchText.toLowerCase()));
				setID(match);
			})
	}, [searchText])
	console.log(ID);

	const textChange = (event) => { // getting search result
		// console.log(event.target.value);
		setSearchText(event.target.value);
	}

	return (
		<div>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search By ID..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					ID.slice(0).reverse().map(item => <SingleID key={item._id} item={item} ID={ID} setID={setID}></SingleID>)
				}
			</div>
		</div>
	);
};

export default ManageID;