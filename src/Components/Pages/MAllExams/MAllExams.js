import React, { useEffect, useState } from 'react';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import MIndividualExams from '../M Individual Exams/MIndividualExams';
import empty from '../../../img/empty.jpg';

const MAllExams = () => {

	const [exams, setExams] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/exams/admin`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setExams(data))
	}, [])

	console.log(exams);
	return (
		<div>
			<HelmetTitle title={'Manage Exams'}></HelmetTitle>
			{
				exams.length === 0 && <div>
					<h1 className='mt-5'>No Quiz Taken</h1>
					<img src={empty} className='img-fluid' width='900px' alt="" style={{ margin: "0 0 0 100px" }} />
				</div>
			}
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
				{
					exams.map(exam => <MIndividualExams key={exam._id} exam={exam} exams={exams} setExams={setExams}></MIndividualExams>)
				}
			</div>
		</div>
	);
};

export default MAllExams;