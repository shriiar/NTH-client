import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';

const MyResultsSingleSubject = () => {

	const [user] = useAuthState(auth);
	const [result, setResult] = useState([]);
	const [student, setStudent] = useState([]);

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
			.then(data => setResult(data))
	}, [student])

	// console.log(result);
	return (
		<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
			{
				result.map(res => <MyIndividualResult key={res._id} res={res}></MyIndividualResult>)
			}
		</div>
	);
};

export default MyResultsSingleSubject;