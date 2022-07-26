import React from 'react';
import './Footer.css';
import logo from '../../../img/01.png';
import vid from '../../../vid/footer animation.mp4';

const Footer = () => {
	return (
		<div class="pg-footer" style={{ margin: "190px 0 0 0" }}>
			<footer class="footer">
				<svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
					<path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
				</svg>
				<div class="footer-content d-flex align-items-center p-0 row">
					<div class="footer-content-column col-12 col-md-6 col-lg-4">
						<div class="footer-logo">
							<img src={logo} className='img-fluid' alt="" />
						</div>
						<div class="footer-menu">
							<h2 class="footer-menu-name">Nazib Teaching Home</h2>
						</div>
					</div>
					<div class="footer-content-column col-12 col-md-5 col-lg-4">
						<div class="footer-menu">
							<h2 class="footer-menu-name">Email</h2>
							<ul id="menu-company" class="footer-menu-list">
								<li class="menu-item menu-item-type-post_type menu-item-object-page">
									<p href="#">nthgec@gmail.com</p>
								</li>
							</ul>
						</div>
						<div class="footer-menu">
							<h2 class="footer-menu-name">Phone</h2>
							<ul id="menu-legal" class="footer-menu-list">
								<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
									<p href="#">01800000000</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="footer-content-column col-12 col-md-6 col-lg-4">
						<div class="footer-menu">
							<h2 class="footer-menu-name">Adress</h2>
							<ul id="menu-quick-links" class="footer-menu-list">
								<li class="menu-item menu-item-type-custom menu-item-object-custom">
									<p target="_blank" rel="noopener noreferrer" href="#">Beside Well Park, Gec Circle, Chottogram, Bangladesh</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="footer-content-column col-12 col-md-6 col-lg-4">
						<div class="footer-call-to-action">
							<video class="my-5 footer-vid" src={vid}
								autoPlay loop muted></video>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;