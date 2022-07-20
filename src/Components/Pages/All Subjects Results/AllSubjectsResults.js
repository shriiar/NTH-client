import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import IndividualSubjectREsults from '../Individual Subject REsults/IndividualSubjectREsults';

const AllSubjectsResults = () => {
	const [allSubjects, setAllSubjects] = useState([]);
	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);
	const [searchText, setSearchText] = useState('');

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

	const { className, batch, group } = useParams();

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/subjects?className=${className}&batch=${batch}&group=${group}`, {
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

	// console.log(allSubjects);

	const details = {
		className: student[0]?.className,
		batch: student[0]?.batch,
		group: student[0]?.group
	}

	const textChange = (event) => { // getting search result
		// console.log(event.target.value);
		setSearchText(event.target.value);
	}

	return (
		<div>
			<HelmetTitle title={`Manage Result Class ${className}`}></HelmetTitle>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					allSubjects?.map(subject => <IndividualSubjectREsults key={subject._id} subject={subject} details={details}></IndividualSubjectREsults>)
				}
			</div>
		</div>
	);
};

export default AllSubjectsResults;