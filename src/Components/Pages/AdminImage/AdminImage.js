import React from 'react';
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addTask from '../../../img/SetExam.png';
import manageTask from '../../../img/ManageExam.png';
import './AdminImage.css';

const AdminImage = () => {
	const navigate = useNavigate();
	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div className=''>
			<HelmetTitle title={'Add / Manage Image ID'}></HelmetTitle>
			<section class="hero-section">
				<div class="card-grid-TaskRecords">
					<button class="card-blur bg-transparent" onClick={() => goTo('/addImage')}>
						<div class="card__background" style={{
							backgroundImage: `url(${addTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Add Image</h3>
						</div>
					</button>
					<button class="card-blur bg-transparent" onClick={() => goTo('/manageImages')}>
						<div class="card__background" style={{
							backgroundImage: `url(${manageTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Manage Images</h3>
						</div>
					</button>
					<div>

					</div>
				</div>
			</section>
		</div>
	);
};

export default AdminImage;