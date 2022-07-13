import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyIndividualNotice = (props) => {
	const navigate = useNavigate();
	const { title, description, className, group, batch, date, _id } = props.noc;
	const goTo = () => {
		navigate(`/myNotice/expandedNotice/${_id}`);
	}
	return (
		<button className='my-4' onClick={() => goTo()}>
			<div>
				<h1>{title}</h1>
				<h3>{date}</h3>
			</div>
		</button>
	);
};

export default MyIndividualNotice;