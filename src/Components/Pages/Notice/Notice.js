import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Notice.css';
import addTask from '../../../img/AddNotice.png';
import manageTask from '../../../img/ManageTask.png';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

const Notice = () => {
	const navigate = useNavigate();
	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div className=''>
			<HelmetTitle title={'Add / Manage Notice'}></HelmetTitle>
			<section class="hero-section">
				<div class="card-grid-TaskRecords">
					<button class="card-blur bg-transparent" onClick={() => goTo('/addNotice')}>
						<div class="card__background" style={{
							backgroundImage: `url(${addTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Add Notice</h3>
						</div>
					</button>
					<button class="card-blur bg-transparent" onClick={() => goTo('/manageNotice')}>
						<div class="card__background" style={{
							backgroundImage: `url(${manageTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Manage Notice</h3>
						</div>
					</button>
					<div>

					</div>
				</div>
			</section>
		</div>
	);
};

export default Notice;