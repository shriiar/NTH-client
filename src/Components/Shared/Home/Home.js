import React, { useEffect, useState } from 'react';
import './Home.css';
import Typewriter from "typewriter-effect";
import Tilt from 'react-tilt';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import astronaut from '../../../img/nazib1.jpg';
import celebrating from '../../../img/nazib2.jpg';
import education from '../../../img/nazib3.jpg';
import taken from '../../../img/nazib4.jpg';


const Home = () => {

	const images = [astronaut, celebrating, education, taken];

	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		beforeChange: (current, next) => setImageIndex(next),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

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

			<div className='my-5'>
				<Slider {...settings} className='d-flex responsive'>
					{images.map((img, idx) => (
						<div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
							<img src={img} className='img-fluid' alt={img} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Home;