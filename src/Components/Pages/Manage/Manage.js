import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import './Manage.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
			<div className='row'>
				<div className='col-sm-12 col-md-4 col-lg-3'>
					<section class="hero-section">
						<div class="card-grid-Manage">
							<div data-aos='fade-right' class="card-blur">
								<div class="card__background">

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">Manage All Students</h3>
									<Button className='w-50 mx-auto' onClick={() => goTo('/manage/manageUsers')}>Manage</Button>
								</div>
							</div>
							<div data-aos='fade-right' class="card-blur">
								<div class="card__background">

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">All Tasks</h3>
									<Button className='w-50 mx-auto' onClick={() => goTo('/manage/taskRecords')}>Add or Manage</Button>
								</div>
							</div>
							<div data-aos='fade-right' class="card-blur">
								<div class="card__background">

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">All Notices</h3>
									<Button className='w-50 mx-auto' onClick={() => goTo('/manage/Notice')}>Add or Manage</Button>
								</div>
							</div>
							<div data-aos='fade-right' class="card-blur">
								<div class="card__background">

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">Exams & Results</h3>
									<Button className='w-50 mx-auto' onClick={() => goTo('/manage/examsResults')}>Add or Manage</Button>
								</div>
							</div>
							<div data-aos='fade-right' class="card-blur">
								<div class="card__background">

								</div>
								<div class="card__content d-flex flex-column">
									<h3 class="card__heading">All Payments</h3>
									<Button className='w-50 mx-auto' onClick={() => goTo('/manage/checkPayment')}>Manage Users</Button>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className='col-sm-12 col-md-8 col-lg-9'>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Manage;