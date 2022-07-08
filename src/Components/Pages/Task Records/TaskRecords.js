import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './TaskRecords.css';

const TaskRecords = () => {
	const navigate = useNavigate();

	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div>
			<section class="hero-section">
				<div class="card-grid-TaskRecords">
					<button class="card-blur bg-transparent" onClick={() => goTo('/addTasks')}>
						<div class="card__background">
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Add Tasks</h3>
						</div>
					</button>
					<button class="card-blur bg-transparent" onClick={() => goTo('/manageTask')}>
						<div class="card__background">
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading text-center">Manage Tasks</h3>
						</div>
					</button>
				</div>
			</section>
		</div>
	);
};

export default TaskRecords;