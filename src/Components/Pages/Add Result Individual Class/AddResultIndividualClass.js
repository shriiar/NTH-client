import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import AddIndividualResult from '../Add Individual Result/AddIndividualResult';

const AddResultIndividualClass = () => {

	const { className, batch, group } = useParams();

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
				console.log(data[2]);
				const match = data.filter(item => item.email.toLowerCase().includes(searchText.toLowerCase()));
				setAllStudents(match);
			})
	}, [searchText])

	console.log(allStudents);
	const resultQuery = JSON.parse(localStorage.getItem('resultQuery'));

	const textChange = (event) => { // getting search result
		setSearchText(event.target.value);
	}

	return (
		<div>
			<h1 className='text-center'>Results of class {className} {batch} on {resultQuery.subject}, topic {resultQuery.topic}</h1>
			{
				allStudents.length === 0 && <Loading></Loading>
			}
			<div className='mx-auto w-75'>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					allStudents.map(student => <AddIndividualResult key={student._id} student={student} allStudents={allStudents} setAllStudents={setAllStudents}></AddIndividualResult>)
				}
			</div>
		</div>
	);
};

export default AddResultIndividualClass;