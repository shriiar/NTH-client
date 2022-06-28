import React from 'react';
import './StudentResults.css';

const StudentResults = (props) => {
	const { subject, topic, mark, fmark, date } = props.item;
	console.log(props);
	return (
		<div className='p-5'>
			<h1>{subject}</h1>
			<h3>{topic}</h3>
			<h4>{mark} / {fmark}</h4>
			<h5>{date}</h5>
		</div>
	);
};

export default StudentResults;