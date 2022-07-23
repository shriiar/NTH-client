import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import SingleClassTasks from '../Single Class Tasks/SingleClassTasks';

const ManageIndividualClassByTask = () => {

	const { className, batch, group } = useParams();
	const [allSubjects, setAllSubjects] = useState([]);
	const [searchText, setSearchText] = useState('');

	// console.log(className, batch, group, `${process.env.REACT_APP_URL}/subjects?className=${className}&batch=${batch}&group=${group}`);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/subjects?className=${className}&batch=${batch}&group=${group}`, {
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
	}, [searchText])

	const textChange = (event) => { // getting search result
		// console.log(event.target.value);
		setSearchText(event.target.value);
	}

	let subjects = allSubjects[0]?.subjects;

	// console.log(allSubjects[0]);

	return (
		<div>
			<HelmetTitle title={`Manage Tasks Class ${className}`}></HelmetTitle>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					allSubjects?.map(subject => <SingleClassTasks key={subject._id} subject={subject} className={className} batch={batch} group={group}></SingleClassTasks>)
				}
			</div>
		</div>
	);

};

export default ManageIndividualClassByTask;