import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import empty from '../../../img/empty.jpg';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

const MyQuiz = () => {

	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);
	const [exam, setExam] = useState([]);
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => {
				res.json()
				if (res.status === 401 || res.status === 403) {
					signOut(auth);
				}
			})
			.then(data => { })
	}, [user])

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

	// console.log(student);

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/exams?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}&date=${formattedDate}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setExam(data))
	}, [user, student])

	// console.log(exam);
	return (
		<div>
			<HelmetTitle title={'My Quiz'}></HelmetTitle>
			{
				exam.length === 0 && <div>
					<h1 className='mt-5'>No quiz running at the moment</h1>
					<img src={empty} className='img-fluid' width='900px' alt="" style={{ margin: "0 0 0 0" }} />
				</div>
			}
			{
				exam.length !== 0 && <div className='d-flex justify-content-center align-items-center'>
					<iframe src={exam[exam.length - 1]?.formLink} className="w-100" height="1887" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
				</div>
			}
		</div >
	);
};

export default MyQuiz;