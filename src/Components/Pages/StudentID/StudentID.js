import React from 'react';
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addTask from '../../../img/AddNotice.png';
import manageTask from '../../../img/ManageTask.png';
import './StudentID.css';

const StudentID = () => {
	const navigate = useNavigate();
	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div className=''>
			<HelmetTitle title={'Add / Manage Student ID'}></HelmetTitle>
			<section class="hero-section">
				<div class="card-grid-TaskRecords">
					<button class="card-blur bg-transparent" onClick={() => goTo('/insertID')}>
						<div class="card__background" style={{
							backgroundImage: `url(${addTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Insert ID</h3>
						</div>
					</button>
					<button class="card-blur bg-transparent" onClick={() => goTo('/manageID')}>
						<div class="card__background" style={{
							backgroundImage: `url(${manageTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Manage ID</h3>
						</div>
					</button>
					<div>

					</div>
				</div>
			</section>
		</div>
	);
};

export default StudentID;