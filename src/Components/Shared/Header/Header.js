import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../../Hooks/useAdmin';
import logo from '../../../img/Logo-02.png';
import DueMessage from '../Due Message/DueMessage';

const Header = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	const navigate = useNavigate();
	const userSignOut = () => {
		sessionStorage.removeItem("accessToken");
		localStorage.removeItem("resultQuery");
		localStorage.removeItem("singleSubjectVideo");
		signOut(auth);
		navigate('/login');
	}

	const name = user?.displayName?.split(' ');

	const goTo = (path) => {
		navigate(path);
	}

	return (
		<>
			{/* {[false].map((expand) => (
				<Navbar key={expand} expand={expand} className="nav-bar-bg px-5" sticky='top'>
					<Container fluid>
						<CustomLink className="me-4 navLink" to="/">
							<img src='https://i.ibb.co/GszHmKK/01.png' className='img-fluid logo' alt="" />
						</CustomLink>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton className='nav-bar-bg'>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									<CustomLink className="me-4 navLink" to="/">
										<img src='https://i.ibb.co/GszHmKK/01.png' className='img-fluid logo' alt="" />
									</CustomLink>
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body className='nav-bar-bg'>
								<section class="hero-section-navbar">
									<div class="card-grid-navbar">
										<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/')}>
											<div class="card__background" style={{
												backgroundImage: `url("https://i.ibb.co/QD2JCRr/home.png")`
											}}>

											</div>
											<div class="card__content d-flex flex-column">
												<h3 class="card__heading-navbar">NT Home</h3>
											</div>
										</button>
										{
											user && <>
												<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/subjects')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/MCNgsH5/all-Subjects.png")`
													}}>
													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">All Subjects</h3>
													</div>
												</button>
												<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/myQuiz')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/zmr59fF/Quiz.png")`
													}}>

													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">My Quiz</h3>
													</div>
												</button>
												<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/myNotice')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/z6pDPdp/Notice.png")`
													}}>

													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">My Notice</h3>
													</div>
												</button>
											</>
										}
										{
											admin && <button class="card-blur-navbar bg-transparent" onClick={() => goTo('/manage')}>
												<div class="card__background" style={{
													backgroundImage: `url("https://i.ibb.co/Xsd4FHw/Manage.png")`
												}}>
												</div>
												<div class="card__content d-flex flex-column">
													<h3 class="card__heading-navbar">Manage NTH</h3>
												</div>
											</button>
										}
										{
											!user ? <>
												<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/signup')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/fXZYwSN/Signup.png")`
													}}>
													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">Sign Up</h3>
													</div>
												</button>
												<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/login')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/60VQB9d/Login.png")`
													}}>
													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">Log In</h3>
													</div>
												</button>
											</>
												:
												<>
													<button class="card-blur-navbar bg-transparent" onClick={() => goTo('/student')}>
														<div class="card__background" style={{
															backgroundImage: `url("https://i.ibb.co/tCxkj9c/Student.png")`
														}}>
														</div>
														{
															name && <>
																<div class="card__content d-flex flex-column">
																	<h3 class="card__heading-navbar">{name[0]} {name[1]}</h3>
																</div>
															</>
														}
													</button>
													<button class="card-blur-navbar bg-transparent" onClick={userSignOut}>
														<div class="card__background" style={{
															backgroundImage: `url("https://i.ibb.co/QD2JCRr/home.png")`
														}}>
														</div>
														<div class="card__content d-flex flex-column">
															<h3 class="card__heading-navbar">Sign Out</h3>
														</div>
													</button>
												</>
										}
									</div>
								</section>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
					<DueMessage></DueMessage>
				</Navbar>
			))} */}
			<nav class="nav-bar-bg navbar navbar-dark fixed-top px-5">
				<div class="container-fluid">
					<CustomLink className="me-4 navLink" to="/">
						<img src='https://i.ibb.co/GszHmKK/01.png' className='img-fluid logo' alt="" />
					</CustomLink>
					<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="offcanvas offcanvas-end nav-bg" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
						<div class="offcanvas-header">
							<CustomLink className="me-4 navLink" to="/">
								<img src='https://i.ibb.co/GszHmKK/01.png' className='img-fluid logo' alt="" />
							</CustomLink>
							<button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div class="offcanvas-body">
							<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
								<section class="hero-section-navbar">
									<div class="card-grid-navbar">
										<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/')}>
											<div class="card__background" style={{
												backgroundImage: `url("https://i.ibb.co/QD2JCRr/home.png")`
											}}>

											</div>
											<div class="card__content d-flex flex-column">
												<h3 class="card__heading-navbar">NT Home</h3>
											</div>
										</button>
										{
											user && <>
												<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/subjects')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/MCNgsH5/all-Subjects.png")`
													}}>
													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">All Subjects</h3>
													</div>
												</button>
												<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/myQuiz')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/zmr59fF/Quiz.png")`
													}}>

													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">My Quiz</h3>
													</div>
												</button>
												<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/myNotice')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/z6pDPdp/Notice.png")`
													}}>

													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">My Notice</h3>
													</div>
												</button>
											</>
										}
										{
											admin && <button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/manage')}>
												<div class="card__background" style={{
													backgroundImage: `url("https://i.ibb.co/Xsd4FHw/Manage.png")`
												}}>
												</div>
												<div class="card__content d-flex flex-column">
													<h3 class="card__heading-navbar">Manage NTH</h3>
												</div>
											</button>
										}
										{
											!user ? <>
												<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/signup')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/fXZYwSN/Signup.png")`
													}}>
													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">Sign Up</h3>
													</div>
												</button>
												<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/login')}>
													<div class="card__background" style={{
														backgroundImage: `url("https://i.ibb.co/60VQB9d/Login.png")`
													}}>
													</div>
													<div class="card__content d-flex flex-column">
														<h3 class="card__heading-navbar">Log In</h3>
													</div>
												</button>
											</>
												:
												<>
													<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={() => goTo('/student')}>
														<div class="card__background" style={{
															backgroundImage: `url("https://i.ibb.co/tCxkj9c/Student.png")`
														}}>
														</div>
														{
															name && <>
																<div class="card__content d-flex flex-column">
																	<h3 class="card__heading-navbar">{name[0]} {name[1]}</h3>
																</div>
															</>
														}
													</button>
													<button data-bs-dismiss="offcanvas" aria-label="Close" class="card-blur-navbar bg-transparent" onClick={userSignOut}>
														<div class="card__background" style={{
															backgroundImage: `url("https://i.ibb.co/QD2JCRr/home.png")`
														}}>
														</div>
														<div class="card__content d-flex flex-column">
															<h3 class="card__heading-navbar">Sign Out</h3>
														</div>
													</button>
												</>
										}
									</div>
								</section>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;