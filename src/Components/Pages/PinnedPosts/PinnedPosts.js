import React from 'react';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addTask from '../../../img/Result.png';
import manageTask from '../../../img/manageResult.png';
import './PinnedPosts.css';
import { useNavigate } from 'react-router-dom';

const PinnedPosts = () => {
	const navigate = useNavigate();
	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div className=''>
			<HelmetTitle title={'Add / Manage Pinned Post'}></HelmetTitle>
			<section class="hero-section">
				<div class="card-grid-TaskRecords">
					<button class="card-blur bg-transparent" onClick={() => goTo('/addPinnedPost')}>
						<div class="card__background" style={{
							backgroundImage: `url(${addTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Add Pinned Post</h3>
						</div>
					</button>
					<button class="card-blur bg-transparent" onClick={() => goTo('/managePinnedPosts')}>
						<div class="card__background" style={{
							backgroundImage: `url(${manageTask})`
						}}>
						</div>
						<div class="card__content d-flex flex-column">
							<h3 class="card__heading">Manage Pinned </h3>
						</div>
					</button>
					<div>

					</div>
				</div>
			</section>
		</div>
	);
}

export default PinnedPosts;