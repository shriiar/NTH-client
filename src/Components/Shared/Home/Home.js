import React, { useEffect, useReducer, useState } from 'react';
import './Home.css';
import './Home.scss';
import Typewriter from "typewriter-effect";
// import Tilt from 'react-tilt';
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import Slider from "react-slick";
import nazib1 from '../../../img/nazib1.jpg';
import nazib2 from '../../../img/nazib2.jpg';
import nazib3 from '../../../img/nazib3.jpg';
import nazib4 from '../../../img/nazib4.jpg';
import nazib7 from '../../../img/nazib7.jpg';
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
// import $ from 'jquery';
import logo from '../../../img/01.png';
import c1 from '../../../img/c1.jpg';
import c2 from '../../../img/c2.jpg';
import c3 from '../../../img/c3.jpg';
import c4 from '../../../img/c4.jpg';
import c5 from '../../../img/c5.jpg';
import c6 from '../../../img/c6.jpg';
import c7 from '../../../img/c7.jpg';
import c8 from '../../../img/c8.jpg';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import HelmetTitle from '../HelmetTitle/HelmetTitle';
import SingleHomeImages from '../Single Home Images/SingleHomeImages';



const Home = () => {

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

	const [student, setStudent] = useState([]);
	const [images, setimages] = useState([]);
	const [user] = useAuthState(auth);
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');
	const navigate = useNavigate();

	let myArray = formattedDate.split(' ');

	let newDate = myArray[1][0], newMonth = myArray[0], newYear = parseInt(myArray[2]);
	if (myArray[1].length > 2) {
		newDate += myArray[1][1];
	}

	newDate = parseInt(newDate);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user?.email])

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/images`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setimages(data))
	}, [])

	console.log(images);

	// console.log(student[0], newDate);

	if (student[0]?.due === 2 && ((newDate >= 15 && student[0]?.payMonth === myArray[0]) || (student[0]?.payMonth !== myArray[0]) || (student[0]?.payYear !== newYear))) {
		signOut(auth);
		navigate('/login');
	}

	useEffect(() => {
		if ((student[0]?.paid === false && (student[0]?.due === null || student[0]?.due === undefined) && newDate >= 1 && student[0]?.role !== 'admin')) {
			const updatedUser =
				{ name: student[0]?.name, father: student[0]?.father, mother: student[0]?.mother, className: student[0]?.className, batch: student[0]?.batch, group: student[0]?.group, email: student[0]?.email, img: student[0]?.img, paid: false, lastPaid: student[0]?.lastPaid, due: 1, payMonth: myArray[0], payYear: newYear }

			console.log('OKKKK');


			fetch(`${process.env.REACT_APP_URL}/students/${student[0]?.email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(updatedUser)
			})
				.then(res => res.json())
				.then(data => setStudent(data))
		}

		else if (student[0]?.paid === false && student[0]?.due === 1 && student[0]?.payMonth !== myArray[0] && newDate >= 1) {
			const updatedUser =
				{ name: student[0]?.name, father: student[0]?.father, mother: student[0]?.mother, className: student[0]?.className, batch: student[0]?.batch, group: student[0]?.group, email: student[0]?.email, img: student[0]?.img, paid: student[0]?.paid, lastPaid: student[0]?.lastPaid, due: 2, payMonth: myArray[0], payYear: newYear }

			fetch(`${process.env.REACT_APP_URL}/students/${student[0]?.email}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(updatedUser)
			})
				.then(res => res.json())
				.then(data => setStudent(data))
		}
	}, [student])



	return (
		<div>
			<HelmetTitle title={'Home'}></HelmetTitle>
			<div className='container'>
				<div className="row align-items-center mt-5 part1">
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
													"Academic Coaching for Class 5 & 7",
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
					<div data-aos='fade-bottom' className="col-12 col-md-12 col-lg-6 mt-5 p-0">
						<img style={{ width: "600px" }} src="https://i.ibb.co/MV4jG1t/nazib5.jpg" className='img-fluid' alt="" />
					</div>
				</div>

				<div className='mt-5'>
					<div className='glass-body'>
						<div className="glass-body1" style={{
							backgroundImage: `url("${logo}")`
						}}>
							<section class="glass p-5">
								<div class="header w-100">
									<img className='w-100 mx-auto text-center img-fluid px-5' src={logo} />
								</div>
								<div class="quote">
									<p>Nazib's Teaching Home</p>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>


			<div className='part2'>
				<div className="container">
					<div style={{ margin: "100px 0" }} className="row align-items-center">
						<div data-aos='fade-right' className="col-12 col-md-6 col-lg-6 mb-5">
							<img src={nazib1} className='img-fluid' alt="" />
						</div>
						<div data-aos='fade-right' className="col-12 col-md-6 col-lg-6 mb-5">
							<p className='fs-4'>SSC Special Batch of English Version for Science Group. <br />

								Subjects Taken by Nazib Sir: <span className='fw-bold' style={{ color: "#f6861f" }}>
									General Math, Higher Math, Physics, Chemistry, Biology, ICT. <br />
								</span>

								<span className='fw-bold' style={{ color: "#f6861f" }}>Bangla, English, BGS </span> Class are taken by
								Masum Sir and Mamun Sir. <br /></p>
						</div>
						<div data-aos='fade-left' className="col-12 col-md-6 col-lg-6 mb-5">
							<p className='fs-4'>To ensure the education quality, <span className='fw-bold' style={{ color: "#f6861f" }}>weekly assignment</span> on basic notes are taken to monitor Progress.</p>
						</div>
						<div data-aos='fade-left' className="col-12 col-md-6 col-lg-6 mb-5">
							<img src={nazib2} className='img-fluid' alt="" />
						</div>
						<div data-aos='fade-right' className="col-12 col-md-6 col-lg-6 mb-5">
							<img src={nazib3} className='img-fluid' alt="" />
						</div>
						<div data-aos='fade-left' className="col-12 col-md-6 col-lg-6 mb-5">
							<p className='fs-4'>We ensure the quality of education. We also make sure to complete the syllabus in the class lecture so that the <span className='fw-bold' style={{ color: "#f6861f" }}>students do not need any house tutor.</span></p>
						</div>
						<div data-aos='fade-left' className="col-12 col-md-6 col-lg-6 mb-5">
							<p className='fs-4'>During the teenage life, students cherish various dreams about their future. And one of these dreams is the dream of studying in <span className='fw-bold' style={{ color: "#f6861f" }}>cadet college.</span> Nazib's Teaching Home is with you to fulfill this dream.</p>
						</div>
						<div data-aos='fade-right' className="col-12 col-md-6 col-lg-6 mb-5">
							<img src={nazib4} className='img-fluid' alt="" />
						</div>
						<div data-aos='fade-right' className="col-12 col-md-6 col-lg-6 mb-5">
							<img src={nazib7} className='img-fluid' alt="" />
						</div>
						<div data-aos='fade-left' className="col-12 col-md-6 col-lg-6 mb-5">
							<p className='fs-4'>There is no compromise in ensuring the overall facilities of the students. So Najib's Teaching Home offers <span className='fw-bold' style={{ color: "#f6861f" }}>free transportation facilities</span> to students who can beat the distance in the way of best preparation.</p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ margin: "100px 0" }}>
				<h1>What We Offer?</h1>
				<section class="hero-section h-100">
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

			<div className='container'>
				<img src={cadetsCollage} className='img-fluid cadetsCollage' alt="" />
			</div>

			<div className="part4">
				<div className='container mx-auto p-5' style={{ margin: "100px 0" }}>
					<h1>Lets Hear From Some of Our Students</h1>
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
			</div>

			<div className="container">
				<h1 className='my-5'>Inside Nazib Teaching Home</h1>
				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center justify-content-center">
					{
						images.map(item => <SingleHomeImages key={item._id} item={item}></SingleHomeImages>)
					}
				</div>
			</div>


		</div>
	);
};

export default Home;