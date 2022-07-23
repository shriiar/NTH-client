import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import SingleSubjectTask from '../Single Subject Task/SingleSubjectTask';

const SingleSubjectTasks = () => {
	const { className, batch, group, subject } = useParams();
	const [searchText, setSearchText] = useState('');

	const [task, setTask] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/subWAcc?className=${className}&batch=${batch}&group=${group}&subject=${subject}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				const match = data.filter(item => (item.name.toLowerCase().includes(searchText.toLowerCase())) || (item.date.toLowerCase().includes(searchText.toLowerCase())));
				setTask(match);
			})
	}, [searchText])

	const textChange = (event) => { // getting search result
		// console.log(event.target.value);
		setSearchText(event.target.value);
	}

	// console.log(task);
	return (
		<div>
			<HelmetTitle title={`Manage Class ${className} ${subject.toUpperCase()}`}></HelmetTitle>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					task?.slice(0).reverse().map(item => <SingleSubjectTask key={item._id} item={item} task={task} setTask={setTask}></SingleSubjectTask>)
				}
			</div>
		</div>
	);
};

export default SingleSubjectTasks;