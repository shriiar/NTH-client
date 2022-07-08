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

	const name = user?.displayName.split(' ');

	const goTo = (path) => {
		navigate(path);
	}
	return (
		// <Navbar collapseOnSelect expand="lg" bg="" className='nav-bg mb-4' sticky='top' variant="dark">
		//     <Container>
		//         <Navbar.Brand as={Link} to="/">

		//         </Navbar.Brand>
		//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		//         <Navbar.Collapse id="responsive-navbar-nav">
		//             <Nav className="ms-auto">
		//                 <CustomLink className="me-4 navLink" to="/">Home</CustomLink>
		//                 {
		//                     user && <>
		//                         <CustomLink className="me-4 navLink" to="/subjects">My Subjects</CustomLink>
		//                         <CustomLink className="me-4 navLink" to="/myQuiz">My Quiz</CustomLink>
		//                         <CustomLink className="me-4 navLink" to="/myNotice">My Notice</CustomLink>
		//                         {/* <CustomLink className="me-4 navLink" to="/bkashIntegration">Payment</CustomLink> */}
		//                     </>
		//                 }
		//                 {
		//                     admin && <CustomLink className="me-4 navLink" to="/manage">Manage NTH</CustomLink>
		//                 }
		//                 {
		//                     !user ? <>
		//                         <CustomLink className="me-4 navLink" to="/signup">Sign Up</CustomLink>
		//                         <CustomLink className="me-4 navLink" to="/login">Login</CustomLink></>
		//                         :
		//                         <>
		//                             <CustomLink className="me-4 navLink" to="/student">{user?.displayName}</CustomLink>
		//                             <button className="navLink border-0 text-center bg-transparent text-start p-0" onClick={userSignOut}>Sign Out</button></>
		//                 }
		//             </Nav>
		//         </Navbar.Collapse>
		//     </Container>
		// </Navbar >
		<>
			{[false].map((expand) => (
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
														<div class="card__content d-flex flex-column">
															<h3 class="card__heading-navbar">{name[0]} {name[1]}</h3>
														</div>
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
				</Navbar>
			))}
		</>
	);
};

export default Header;