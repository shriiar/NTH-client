import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './DueMessage.css';

const DueMessage = () => {

	const [student, setStudent] = useState([]);
	const [user] = useAuthState(auth);
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');

	let myArray = formattedDate.split(' ');

	let newDate = myArray[1][0], leapYear = parseInt(myArray[2]);
	if (myArray[1].length > 2) {
		newDate += myArray[1][1];
	}

	newDate = parseInt(newDate);

	let monthLimit;
	if (myArray[0] === 'Jan') monthLimit = 31;
	else if (myArray[0] === 'Feb') monthLimit = 28;
	else if (myArray[0] === 'Mar') monthLimit = 31;
	else if (myArray[0] === 'Apr') monthLimit = 30;
	else if (myArray[0] === 'May') monthLimit = 31;
	else if (myArray[0] === 'Jun') monthLimit = 30;
	else if (myArray[0] === 'Jul') monthLimit = 31;
	else if (myArray[0] === 'Aug') monthLimit = 31;
	else if (myArray[0] === 'Sep') monthLimit = 30;
	else if (myArray[0] === 'Oct') monthLimit = 31;
	else if (myArray[0] === 'Nov') monthLimit = 30;
	else if (myArray[0] === 'Dec') monthLimit = 31;

	if ((0 === leapYear % 4) && (0 !== leapYear % 100) || (0 === leapYear % 400)) {
		monthLimit = 29;
	}
	console.log(user?.email);
	// console.log(student, newDate, monthLimit);

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user?.email])

	console.log(student[0], newDate, monthLimit);

	return (
		<div className='w-100'>
			{
				((student[0]?.due === 1 && user) && (newDate >= 15 && newDate <= monthLimit) && student[0]?.role !== 'admin') && <p className='text-danger button-85 fw-bold fs-5 my-4'>
					You have a due of this month. If you already paid please contact NTH support. <br /> Thank you for being with us.
				</p>
			}
			{
				(student[0]?.due === 2 && user && student[0]?.role !== 'admin') && <p className='text-danger button-85 fw-bold fs-5 my-4'>
					Seems like you have'nt paid last month. <br />You will lose access from {myArray[0]} 14.
				</p>
			}
		</div>
	);
};

export default DueMessage;