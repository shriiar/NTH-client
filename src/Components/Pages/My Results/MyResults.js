import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyIndividualResult from '../My Individual Result/MyIndividualResult';

const MyResults = () => {
	const [user] = useAuthState(auth);
	const [result, setResult] = useState([]);
	const [student, setStudent] = useState([]);


	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/results?className=${student?.className}&batch=${student?.batch}&group=${student?.group}&email=${student?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setResult(data))
	}, [])

	console.log(user);

	return (
		<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
			{
				result.slice(0).reverse().map(res => <MyIndividualResult key={res._id} res={res}></MyIndividualResult>)
			}
		</div>
	);
};

export default MyResults;