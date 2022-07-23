import { format } from 'date-fns';
import fi from 'date-fns/esm/locale/fi/index.js';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const SingleStudentPayment = (props) => {
	const { allStudents, setAllStudents } = props;
	const { student } = props;
	// console.log(student);
	const { name, father, mother, className, batch, group, email, img } = student;
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');

	let myArray = formattedDate.split(' ');
	// console.log(myArray);

	let newDate = myArray[1][0], payYear = parseInt(myArray[2]);
	if (myArray[1].length > 2) {
		newDate += myArray[1][1];
	}

	// console.log(newDate);

	// console.log(formattedDate);

	const paid = (paid) => {
		let updatedUser;
		if (paid === 'paid') {
			updatedUser = { name, father, mother, className, batch, group, email, img: student?.img, paid: true, lastPaid: formattedDate, due: null, payMonth: null, payYear: payYear };
		}
		else {
			updatedUser = { name, father, mother, className, batch, group, email, img: student?.img, paid: false, lastPaid: null, due: null, payMonth: myArray[0], payYear: payYear };
		}
		// console.log(updatedUser);
		fetch(`${process.env.REACT_APP_URL}/students/${email}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(updatedUser)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				toast.success(`Payment Updated`);

				fetch(`${process.env.REACT_APP_URL}/students?className=${className}&batch=${batch}&group=${group}`, {
					method: 'GET',
					headers: {
						'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
					}
				})
					.then(res => res.json())
					.then(data => setAllStudents(data))
			})
	}
	return (
		<div className='card-pos'>
			<div className='card-sub border-0 mb-3'>
				<img src={student?.img} class="card__image w-100" alt="" />
				<div class="card__overlay">
					<div class="card__header">
						<div class="card__header-text fs-1">
							<h3 class="card__title text-white">{student?.name}</h3>
							{
								student.paid ? <>
									<h2 className='text-white text-start'>
										Paid: <span className='text-success'>Paid</span>
									</h2>
								</>
									:
									<>
										<h2 className='text-white text-start'>
											Paid: <span className='text-danger'>Not Paid</span>
										</h2>
									</>
							}
						</div>
					</div>
					{
						student.paid ? <>
							<button className='button-87 mb-3 mx-auto' onClick={() => paid('not paid')}>Not Paid</button>
						</>
							:
							<>
								<button className='button-87 mb-3 mx-auto' onClick={() => paid('paid')}>Paid</button>
							</>
					}
				</div>
			</div>
		</div>
	);
};

export default SingleStudentPayment;