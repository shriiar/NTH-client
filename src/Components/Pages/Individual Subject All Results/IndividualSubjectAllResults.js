import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import SingleAllSubjectResults from '../Single All Subject Results/SingleAllSubjectResults';

const IndividualSubjectAllResults = () => {

	const { className, batch, group, subject } = useParams()
	const [searchText, setSearchText] = useState('');

	const [allResult, setAllResult] = useState([]);;

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/results/admin?className=${className}&batch=${batch}&group=${group}&subject=${subject}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				{
					const match = data.filter(item => (item.name.toLowerCase().includes(searchText.toLowerCase())) || (item.date.toLowerCase().includes(searchText.toLowerCase())) || (item.email.toLowerCase().includes(searchText.toLowerCase())));
					setAllResult(match);
				}
			})
	}, [searchText])

	const textChange = (event) => { // getting search result
		// console.log(event.target.value);
		setSearchText(event.target.value);
	}

	console.log(allResult);
	return (
		<div>
			<HelmetTitle title={`${className} ${batch.toUpperCase()} ${subject.toUpperCase()}`}></HelmetTitle>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
				{
					allResult.slice(0).reverse().map(res => <SingleAllSubjectResults key={res._id}
						res={res} allResult={allResult} setAllResult={setAllResult}></SingleAllSubjectResults>)
				}
			</div>
		</div>
	);
};

export default IndividualSubjectAllResults;