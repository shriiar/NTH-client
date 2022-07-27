import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';
import empty from '../../../img/empty.jpg';

const MyResultsSingleSubject = () => {

	const [user] = useAuthState(auth);
	const [result, setResult] = useState([]);
	const [student, setStudent] = useState([]);
	const [searchText, setSearchText] = useState('');

	const { subject } = useParams();
	// console.log(student, subject);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])


	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/results?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}&email=${student[0]?.email}&subject=${subject}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				const match = data.filter(item => (item.topic.toLowerCase().includes(searchText.toLowerCase())));
				setResult(match);
			})
	}, [searchText, student])

	console.log(result);

	const textChange = (event) => { // getting search result
		console.log(event.target.value);
		setSearchText(event.target.value);
	}

	return (
		<div>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			{
				result.length === 0 && <div>
					<h1 className='mt-5'>No Results Published yet</h1>
					<img src={empty} className='img-fluid' width='700px' alt="" style={{ margin: "0 0 0 0" }} />
				</div>
			}
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
				{
					result.map(res => <MyIndividualResult key={res._id} res={res}></MyIndividualResult>)
				}
			</div>
		</div>
	);
};

export default MyResultsSingleSubject;