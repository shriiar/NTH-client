import React from 'react';
import './Footer.css'
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { SiCodechef } from 'react-icons/si';
import { SiTopcoder } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='footerClass' style={{ margin: "100px 0 0 0" }}>
            <div class="footer-basic">
                <footer>
                    <ul class="list-inline row">
                        <div className="col-3 col-md-2 col-lg-2">
                            <a href="https://www.instagram.com/shriiar/">
                                <FaInstagram className='a-icon'></FaInstagram>
                            </a>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2">
                            <a href="https://github.com/shriiiar">
                                <FaGithub className='a-icon'></FaGithub>
                            </a>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2">
                            <a href="https://www.linkedin.com/in/fahim-shahriar-sajid-139757235/">
                                <FaLinkedin className='a-icon'></FaLinkedin>
                            </a>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2">
                            <a href="https://codeforces.com/profile/Shriiar">
                                <SiCodeforces className='a-icon'></SiCodeforces>
                            </a>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2">
                            <a href="https://atcoder.jp/users/Shriiar">
                                <SiTopcoder className='a-icon'></SiTopcoder>
                            </a>
                        </div>
                        <div className="col-3 col-md-2 col-lg-2">
                            <a href="https://www.codechef.com/users/shriiar">
                                <SiCodechef className='a-icon'></SiCodechef>
                            </a>
                        </div>
                    </ul>
                    <h3 className='copyright text-center my-2 fs-3'><GoLocation className='a-icon'></GoLocation> Nasirabad, Chittagong, Bangladesh</h3>
                    <h4 class="copyright fs-4 d-flex justify-content-center"><MdOutlineMailOutline className='a-icon me-2'></MdOutlineMailOutline>fahimshariar13@gmail.com</h4>
                    <h6 class="copyright fs-6">Competitive Programmer || Web Developer</h6>
                </footer>
            </div>
        </div>
    );
};

export default Footer;