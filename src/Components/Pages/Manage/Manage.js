import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import './Manage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import one from '../../../img/undraw_Add_tasks_re_s5yj.png';
import two from '../../../img/undraw_Detailed_examination_re_ieui.png';
import three from '../../../img/undraw_Observations_re_ohja.png';
import four from '../../../img/undraw_Online_payments_re_y8f2.png';
import five from '../../../img/undraw_Online_test_re_kyfx.png';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

const Manage = () => {

	const navigate = useNavigate();

	const goTo = (path) => {
		navigate(path);
	}

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

	return (
		<div>
			<HelmetTitle title={'Manage'}></HelmetTitle>
			<div className='row'>
				<div className='col-sm-12 col-md-4 col-lg-4 sidebar'>
					<section class="hero-section">
						<div data-aos='fade-right' class="card-grid-Manage">
							<button class="card-blur bg-transparent" onClick={() => goTo('/manage/manageUsers')}>
								<div class="card__background" style={{
									backgroundImage: `url(${one})`
								}}>

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">Manage All Students</h3>
								</div>
							</button>
							<button class="card-blur bg-transparent" data-aos='fade-right' onClick={() => goTo('/manage/taskRecords')}>
								<div class="card__background" style={{
									backgroundImage: `url(${two})`
								}}>
								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">All Tasks</h3>
								</div>
							</button>
							<button class="card-blur bg-transparent" data-aos='fade-right' onClick={() => goTo('/manage/Notice')}>
								<div class="card__background" style={{
									backgroundImage: `url(${three})`
								}}>

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">All Notices</h3>
								</div>
							</button>
							<button class="card-blur bg-transparent" data-aos='fade-right' onClick={() => goTo('/manage/examsResults')}>
								<div class="card__background" style={{
									backgroundImage: `url(${five})`
								}}>
								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">Exams & Results</h3>
								</div>
							</button>
							<button class="card-blur bg-transparent" data-aos='fade-right' onClick={() => goTo('/manage/checkPayment')}>
								<div class="card__background" style={{
									backgroundImage: `url(${four})`
								}}>
								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">All Payments</h3>
								</div>
							</button>
							<button class="card-blur bg-transparent" data-aos='fade-right' onClick={() => goTo('/manage/insertID')}>
								<div class="card__background" style={{
									backgroundImage: `url(${four})`
								}}>
								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">Insert ID</h3>
								</div>
							</button>
						</div>
					</section>
				</div>
				<div className='col-sm-12 col-md-8 col-lg-8'>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Manage;