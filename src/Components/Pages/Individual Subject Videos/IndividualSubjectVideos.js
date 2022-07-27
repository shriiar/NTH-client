import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleSubjectVideos from '../Single Subject Videos/SingleSubjectVideos';
import empty from '../../../img/empty.jpg';

const IndividualSubjectVideos = ({ student }) => {

	const { className, batch, group, subject } = useParams();
	const [searchText, setSearchText] = useState('');

	const [subjectsVid, setSubjectsVid] = useState([]);

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
				setSubjectsVid(match);
			})
	}, [searchText])

	// console.log(subjectsVid);

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
				subjectsVid.length === 0 && <div>
					<h1 className='mt-5'>No Class Recordings Yet</h1>
					<img src={empty} className='img-fluid' width='700px' alt="" style={{ margin: "0 0 0 0" }} />
				</div>
			}
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					subjectsVid.slice(0).reverse().map(subjectVid => <SingleSubjectVideos key={subjectVid._id} subjectVid={subjectVid} className={className} batch={batch} group={group}></SingleSubjectVideos>)
				}
			</div>
		</div>
	);
};

export default IndividualSubjectVideos;