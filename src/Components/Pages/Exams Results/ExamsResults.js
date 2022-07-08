import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ExamsResults = () => {

	const navigate = useNavigate();

	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div>
			<div class="card-grid-Exams mx-auto">
				<button className='card-blur bg-transparent' onClick={() => goTo('/setExams')}>
					<div class="card__background">

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Set Exams</h3>
					</div>
				</button>
				<button className='card-blur bg-transparent' onClick={() => goTo('/ManageExams')}>
					<div class="card__background">

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Manage Exams</h3>
					</div>
				</button>
				<button className='card-blur bg-transparent' onClick={() => goTo('/addResultAllClass')}>
					<div class="card__background">

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Add Manage Results</h3>
					</div>
				</button>
			</div>
		</div>
	);
};

export default ExamsResults;