import React from 'react';
import './StudentResults.css';

const StudentResults = (props) => {
	const { subject, topic, mark, fmark, highest, date, attendance } = props.item;
	// console.log(props);
	return (
		<div className='p-5 h-100'>
			<h1>{subject}</h1>
			<h3>{topic}</h3>
			{
				attendance === 'present' && <h4>Obtained: <span className='text-danger'>{mark} / {fmark}</span></h4>
			}
			{
				attendance === 'absent' && <h4>Attendance: <span className='text-danger'>{attendance.toUpperCase()}</span></h4>
			}
			<h4>Highest: <span className='text-danger'>{highest} / {fmark}</span></h4>
			<h5>{date}</h5>
		</div>
	);
};

export default StudentResults;