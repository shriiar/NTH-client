import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AddIndividualResult = (props) => {
	const navigate = useNavigate();
	const { email } = props.student;

	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');
	const [student, setStudent] = useState([])

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students/admin?email=${email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [email]);

	const resultQuery = JSON.parse(localStorage.getItem('resultQuery'));

	const EventSubmit = (event) => {
		event.preventDefault();

		const myArray = resultQuery.subject.split(" ");
		let subjectName = '';
		for (let i = 0; i < myArray.length; i++) {
			subjectName += myArray[i];
		}

		subjectName = subjectName.toLowerCase();

		const result = {
			name: event.target.name.value, email: student[0]?.email, subject: resultQuery.subject, subjectCode: subjectName, topic: resultQuery.topic, className: student[0]?.className, batch: student[0]?.batch, group: student[0]?.group, mark: event.target.mark.value, highest: resultQuery.highest, fmark: resultQuery.fullMarks, date: formattedDate
		};

		// console.log(result);
		const url = `https://infinite-cliffs-52841.herokuapp.com/results`;
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(result)
		})
			.then(res => res.json())
			.then(result => {
				toast.success(`Result Has Been Added for ${student[0]?.name}`)
			})
	};

	return (
		<div className='card mx-auto w-100 col-6 d-flex justify-content-center h-100 my-5'>
			<form onSubmit={EventSubmit} className="w-100">
				<div className="input-group w-75 mx-auto">
					<label htmlFor='name'>Name</label>
					<input value={student[0]?.name} readOnly type="text" name="name" required />
				</div>
				<div className="input-group w-75 mx-auto">
					<label htmlFor='topic'>Topic Name</label>
					<input value={resultQuery.topic} readOnly type="text" name="topic" required />
				</div>
				<div className='row'>
					<div className="col-6">
						<div className="input-group w-75 mx-auto">
							<label htmlFor='mark'>Attained Mark</label>
							<input type="number" min={0} name="mark" required />
						</div>
					</div>
					<div className="col-6">
						<div className="input-group w-75 mx-auto">
							<label htmlFor='fmark'>Full Mark</label>
							<input value={resultQuery.fullMarks} type="text" readOnly name="fmark" required />
						</div>
					</div>
				</div>
				<input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" required value="Add Result" />
			</form>
			<ToastContainer/>
		</div>
	);
};

export default AddIndividualResult;