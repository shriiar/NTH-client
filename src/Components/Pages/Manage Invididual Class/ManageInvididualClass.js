import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import SingleStudent from '../Single Student/SingleStudent';

const ManageInvididualClass = () => {

	const { className, batch, group } = useParams();

	// console.log(className, batch, group);

	const [allStudents, setAllStudents] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?className=${className}&batch=${batch}&group=${group}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				const match = data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
				setAllStudents(match);
			})
	}, [searchText])

	// console.log(allStudents);

	const textChange = (event) => { // getting search result
		// console.log(event.target.value);
		setSearchText(event.target.value);
	}

	return (
		<div>
			<HelmetTitle title={`Manage Students Class ${className}`}></HelmetTitle>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					allStudents.map(student => <SingleStudent key={student._id} student={student} allStudents={allStudents} setAllStudents={setAllStudents}></SingleStudent>)
				}
			</div>
		</div>
	);
};

export default ManageInvididualClass;