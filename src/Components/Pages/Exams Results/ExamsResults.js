import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import setExam from '../../../img/SetExam.png';
import manageExam from '../../../img/ManageExam.png';
import result from '../../../img/Result.png';
import manageResult from '../../../img/manageResult.png';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

const ExamsResults = () => {

	const navigate = useNavigate();

	const goTo = (path) => {
		navigate(path);
	}
	return (
		<div className='p-5'>
			<HelmetTitle title={'Exams & Results'}></HelmetTitle>
			<div class="card-grid-Exams mx-auto">
				<button className='card-blur bg-transparent' onClick={() => goTo('/setExams')}>
					<div class="card__background" style={{
						backgroundImage: `url(${setExam})`
					}}>

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Set Exams</h3>
					</div>
				</button>
				<button className='card-blur bg-transparent' onClick={() => goTo('/ManageExams')}>
					<div class="card__background" style={{
						backgroundImage: `url(${manageExam})`
					}}>

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Manage Exams</h3>
					</div>
				</button>
				<button className='card-blur bg-transparent' onClick={() => goTo('/addResultAllClass')}>
					<div class="card__background" style={{
						backgroundImage: `url(${result})`
					}}>

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Add Results</h3>
					</div>
				</button>
				<button className='card-blur bg-transparent' onClick={() => goTo('/manageResultAllClass')}>
					<div class="card__background" style={{
						backgroundImage: `url(${manageResult})`
					}}>

					</div>
					<div class="card__content d-flex flex-column">
						<h3 class="card__heading">Manage Results</h3>
					</div>
				</button>
			</div>
		</div>
	);
};

export default ExamsResults;