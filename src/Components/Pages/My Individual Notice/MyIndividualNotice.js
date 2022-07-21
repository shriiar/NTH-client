import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyIndividualNotice.css';
import img from '../../../img/undraw_Observations.png';
import './MyIndividualNotice.css';

const MyIndividualNotice = (props) => {
	const navigate = useNavigate();
	const { title, description, className, group, batch, date, _id } = props.noc;
	const goTo = () => {
		navigate(`/myNotice/expandedNotice/${_id}`);
	}
	return (
		<button class="card-blur-notice bg-transparent" onClick={() => goTo()}>
			<div class="card__background" style={{
				backgroundImage: `url(${img})`
			}}>

			</div>
			<div>
				<div class="card__content d-flex flex-column">
					<h3 class="card__heading__notice">{title}</h3>
					<h3 class="card__heading__notice">{date}</h3>
				</div>
			</div>
		</button>
	);
};

export default MyIndividualNotice;