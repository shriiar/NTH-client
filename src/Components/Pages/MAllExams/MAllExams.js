import React, { useEffect, useState } from 'react';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import MIndividualExams from '../M Individual Exams/MIndividualExams';

const MAllExams = () => {

	const [exams, setExams] = useState([]);

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/exams/admin`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setExams(data))
	}, [])

	// console.log(exams);
	return (
		<div>
			<HelmetTitle title={'Manage Exams'}></HelmetTitle>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
				{
					exams.map(exam => <MIndividualExams key={exam._id} exam={exam} exams={exams} setExams={setExams}></MIndividualExams>)
				}
			</div>
		</div>
	);
};

export default MAllExams;