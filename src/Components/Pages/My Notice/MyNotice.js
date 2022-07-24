import { format } from 'date-fns';
import './MyNotice.css';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyIndividualNotice from '../My Individual Notice/MyIndividualNotice';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { signOut } from 'firebase/auth';
import empty from '../../../img/empty.jpg';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';


const MyNotice = () => {

	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);
	const [notice, setNotice] = useState([]);
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => {
				res.json()
				if (res.status === 401 || res.status === 403) {
					signOut(auth);
				}
			})
			.then(data => { })
	}, [user])

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])

	// console.log(student);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/notice?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				const match = data.filter(item => item.date.toLowerCase().includes(searchText.toLowerCase()));
				setNotice(match);
			})
	}, [user, student, searchText])

	// console.log(notice);

	const textChange = (event) => { // getting search result
		setSearchText(event.target.value);
	}

	return (
		<div>
			<HelmetTitle title={'My Notice'}></HelmetTitle>
			<div className='mx-auto w-75'>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search By Date..' />
			</div>
			{
				notice.length === 0 && <div>
					<h1 className='mt-5'>No new notice</h1>
					<img src={empty} className='img-fluid' width='700px' alt="" style={{ margin: "0 0 0 100px" }} />
				</div>
			}
			{
				notice.length !== 0 && <>
					<div className="row">
						<div className="col-12 col-md-4 col-lg-4 order-2 order-sm-2 order-md-1 order-lg-1">
							<section class="hero-section p-0 px-4">
								<div data-aos='fade-right' class="card-grid-notice">
									{/* < div className='row row-cols-1 row-cols-md-1 row-cols-lg-1' > */}
									{
										notice?.slice(0).reverse().map(noc => <MyIndividualNotice key={noc._id} noc={noc}></MyIndividualNotice>)
									}
									{/* </div > */}
								</div>
							</section>
						</div>
						<div className="col-12 col-md-8 col-lg-8 order-1 order-sm-1 order-md-2 order-lg-2 mb-5">
							<Outlet></Outlet>
						</div>
					</div>
				</>
			}
		</div >
	);
};

export default MyNotice;