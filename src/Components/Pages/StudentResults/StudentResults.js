import React from 'react';
import './StudentResults.css';

const StudentResults = (props) => {
	const { subject, topic, mark, fmark, highest, date } = props.item;
	// console.log(props);
	return (
		<div className='p-5 h-100'>
			<h1>{subject}</h1>
			<h3>{topic}</h3>
			<h4>Obtained: {mark} / {fmark}</h4>
			<h4>Highest: {highest} / {fmark}</h4>
			<h5>{date}</h5>
		</div>
	);
};

export default StudentResults;