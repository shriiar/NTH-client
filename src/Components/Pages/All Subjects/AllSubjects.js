import { async } from '@firebase/util';
import './AllSubjects.css';
import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import IndividualAllSubject from '../Individual All Subject/IndividualAllSubject';
import Loading from '../../Shared/Loading/Loading';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

const AllSubjects = () => {

	const [allSubjects, setAllSubjects] = useState([]);
	const [student, setStudent] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [user] = useAuthState(auth);
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');
	const navigate = useNavigate();

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
		fetch(`${process.env.REACT_APP_URL}/subjects?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}`, {
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
			.then(data => {})
	}, [student])

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/subjects?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				const match = data[0].subjects.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
				setAllSubjects(match);
			})
	}, [student, searchText])


	// const [searchText, setSearchText] = useState('');

	// const textChange = (event) => { // getting search result
	//     console.log(event.target.value);
	//     setSearchText(event.target.value);
	// }

	// useEffect(() => { // used to get search result
	//     fetch(`${process.env.REACT_APP_URL}/subjects?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}`, {
	//         method: 'GET',
	//         headers: {
	//             'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
	//         }
	//     })
	//         .then(res => res.json())
	//         .then(data => {
	//             const match = data.filter(item => item?.name?.toLowerCase().includes(searchText));
	//             setAllSubjects(match);
	//         })
	// }, [searchText, student])

	// console.log(student[0]?.className, student[0]?.batch, student[0]?.group);
	let subjects = allSubjects[0]?.subjects;


	const textChange = (event) => { // getting search result
		setSearchText(event.target.value);
	}

	return (
		<div>
			<HelmetTitle title={'All Subjects'}></HelmetTitle>
			{
				allSubjects.length === 0 && <Loading></Loading>
			}
			<div className='mx-auto w-75'>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					allSubjects.map(subject => <IndividualAllSubject key={subject._id} subject={subject} student={student}></IndividualAllSubject>)
				}
			</div>
		</div>
	);
};

export default AllSubjects;