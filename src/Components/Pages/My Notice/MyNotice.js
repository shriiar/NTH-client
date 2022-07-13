import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyIndividualNotice from '../My Individual Notice/MyIndividualNotice';

const MyNotice = () => {

	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);
	const [notice, setNotice] = useState([]);
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');
	const [searchText, setSearchText] = useState('');


	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])

	console.log(student);

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/notice?className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				const match = data.filter(item => item.date.toLowerCase().includes(searchText.toLowerCase()));
				setNotice(match);
			})
	}, [user, student, searchText])

	console.log(notice);

	const textChange = (event) => { // getting search result
		setSearchText(event.target.value);
	}

	return (
		<div>
			<div className='mx-auto w-75'>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search By Date..' />
			</div>
			{
				notice.length === 0 && <div>
					<h1>No new notice</h1>
				</div>
			}
			{
				notice.length !== 0 && <>
					<div className="row">
						<div className="col-12 col-md-4 col-lg-4">
							< div className='row row-cols-1 row-cols-md-1 row-cols-lg-1' >
								{
									notice?.slice(0).reverse().map(noc => <MyIndividualNotice key={noc._id} noc={noc}></MyIndividualNotice>)
								}
							</div >
						</div>
						<div className="col-12 col-md-8 col-lg-8">
							<Outlet></Outlet>
						</div>
					</div>
				</>
			}
		</div>
	);
};

export default MyNotice;