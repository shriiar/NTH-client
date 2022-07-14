import React, { useEffect, useState } from 'react';
import './Home.css';
import './Home.scss';
import Typewriter from "typewriter-effect";
import Tilt from 'react-tilt';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import nazib1 from '../../../img/nazib1.jpg';
import nazib2 from '../../../img/nazib2.jpg';
import nazib3 from '../../../img/nazib3.jpg';
import nazib4 from '../../../img/nazib4.jpg';
import online from '../../../img/Online.png';
import exam from '../../../img/Exam.png';
import transport from '../../../img/Transport.png';
import competitive from '../../../img/Competitive.png';
import cadetsCollage from '../../../img/Cadets-collage.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import vid1 from '../../../vid/1.mkv';
import vid2 from '../../../vid/2.mp4';
import vid3 from '../../../vid/3.mp4';
import $ from 'jquery';



const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

	return (
		<div className='container'>
			<div className="row align-items-center mt-5">
				<div className="col-12 col-md-12 col-lg-6 justify-content-between">
					<div class="wrapper justify-content-center">
						<div className="row">
							<div className="col-12 fs-2 mt-5">
								<h1 style={{ margin: '50px 0 0 0' }} className='text-start'>Welcome To</h1>
								<h1 className='text-start' style={{ fontSize: "50px" }}>Nazib Teaching Home</h1>
								<h2 className='fs-4 text-start'>Helping Students To Reach Their Potential</h2>
								<div style={{ color: "#f08126" }} className='text-start'>Prepare Yourself For
									<Typewriter
										options={{
											strings: [
												"Cadet College Admission Test",
												"Academin Coaching for Class 5 & 7",
												"Junior School Certificate (JSC)",
												"Secondary School Certificate (SSC)",
											],
											autoStart: true,
											loop: true,
											deleteSpeed: 50,
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-12 col-lg-6 mt-5 p-0">
					<img style={{ width: "600px" }} src="https://i.ibb.co/MV4jG1t/nazib5.jpg" className='img-fluid' alt="" />
				</div>
			</div>

			<div style={{ margin: "100px 0" }}>
				<section className='container carousel'>
					<Carousel interval={null}>
						<Carousel.Item>
							<img
								className="d-block w-100 img-fluid"
								src={nazib1}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 img-fluid"
								src={nazib2}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 img-fluid"
								src={nazib3}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 img-fluid"
								src={nazib4}
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</section>
			</div>

			<div style={{ margin: "100px 0" }}>
				<h1>What We Offer?</h1>
				<section class="hero-section">
					<div class="card-grid-Manage">
						<button data-aos='fade-right' class="card-blur bg-transparent">
							<div class="card__background" style={{
								backgroundImage: `url(${online})`
							}}>

							</div>
							<div class="card__content d-flex flex-column">
								<h3 class="card__heading">Class Records</h3>
							</div>
						</button>
						<button data-aos='fade-right' class="card-blur bg-transparent">
							<div class="card__background" style={{
								backgroundImage: `url(${exam})`
							}}>

							</div>
							<div class="card__content d-flex flex-column">
								<h3 class="card__heading">Online Quiz</h3>
							</div>
						</button>
						<button data-aos='fade-right' class="card-blur bg-transparent">
							<div class="card__background" style={{
								backgroundImage: `url(${transport})`
							}}>

							</div>
							<div class="card__content d-flex flex-column">
								<h3 class="card__heading">Easy Transport</h3>
							</div>
						</button>
						<button data-aos='fade-right' class="card-blur bg-transparent">
							<div class="card__background" style={{
								backgroundImage: `url(${competitive})`
							}}>

							</div>
							<div class="card__content d-flex flex-column">
								<h3 class="card__heading">Competitive Environment</h3>
							</div>
						</button>
					</div>
				</section>
			</div>

			{/* <div>
				<div class="containergg">
					<div class="box">

						<div class="title">
							<span class="block"></span>
							<h1>Kaio Almeida<span></span></h1>
						</div>

						<div class="role">
							<div class="block"></div>
							<p>UI Dev designer</p>
						</div>

					</div>
				</div>
			</div> */}

			<div>
				<img src={cadetsCollage} className='img-fluid cadetsCollage' alt="" />
			</div>

			<div style={{ margin: "100px 0" }}>
				<h1>Lets Hear From Some of Our Cadets</h1>
				<section className='container carousel'>
					<Carousel interval={null}>
						<Carousel.Item>
							<video class="mt-3 w-100" src={vid1} loop controls></video>
							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<video class="mt-3 w-100" src={vid2} loop controls></video>
							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<video class="mt-3 w-100" src={vid3} loop controls></video>
							<Carousel.Caption>
								<h3></h3>
								<p></p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</section>
			</div>

			{/* <h4 class="wordCarousel w-100 mx-auto">
				<span>Word swipe animation: </span>
				<div>
					<ul class="flip5">
						<li>Oh My!</li>
						<li>Swoosh</li>
						<li>Cool</li>
						<li>Squirrel🐿</li>
						<li>Rad</li>
					</ul>
				</div>
			</h4> */}

		</div>
	);
};

export default Home;