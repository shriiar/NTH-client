import { format } from 'date-fns';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/updateStudent.png';


const SetExams = () => {
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');

	const EventSubmit = async (event) => {
		event.preventDefault();

		let newLink = '', newFormLink = event.target.formLink.value;
		let id1 = 0;

		for (let i = 0; i < newFormLink.length; i++) {
			if (id1 === 0 && newFormLink[i] === '"') {
				id1 = 1;
				// console.log('GG');
			}
			else if (id1 === 1 && newFormLink[i] !== '"') newLink += newFormLink[i];
			else if (id1 === 1 && newFormLink[i] === '"') break;
		}
		const exam = {
			name: event.target.subject.value,
			topic: event.target.topic.value,
			formLink: newLink,
			date: event.target.date.value,
			className: event.target.className.value,
			batch: event.target.batch.value,
			group: event.target.group.value,
		}
		// console.log(exam);
		let toastText = `Class ${exam.className} Batch ${exam.batch} Group ${exam.group}`

		fetch('https://infinite-cliffs-52841.herokuapp.com/exams', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(exam)
		})
			.then(res => res.json())
			.then(data => {
				toast(`MCQ Exam Added for ${toastText}`)
			});
	};
	return (
		<div>
			<HelmetTitle title={'Set Exam'}></HelmetTitle>
			<div style={{ margin: "0 0 1050px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add">
						<div class="login">Set Quiz</div>
						<img src={addImg} className='img-fluid' alt="" />
					</div>

					<div class="right-add d-flex align-items-center justify-content-center">
						<form className='w-100' onSubmit={EventSubmit}>
						<div className="input-group">
								<label for="subject">Subject: </label>
								<select name="subject" type="subject">
									<option value="Bangla">Bangla</option>
									<option value="Bangla 1st Paper">Bangla 1st Paper</option>
									<option value="Bangla 2nd Paper">Bangla 2nd Paper</option>
									<option value="English">English</option>
									<option value="English 1st Paper">English 1st Paper</option>
									<option value="English 2nd Paper">English 2nd Paper</option>
									<option value="Mathematics">Mathematics</option>
									<option value="BGS">BGS</option>
									<option value="ICT">ICT</option>
									<option value="Science">Science</option>
									<option value="Physics">Physics</option>
									<option value="Chemistry">Chemistry</option>
									<option value="Biology">Biology</option>
									<option value="Religion">Religion</option>
									<option value="Agriculture">Agriculture</option>
								</select>
							</div>
							<div className="input-group mb-0 w-75 mx-auto">
								<label htmlFor='topic'>Topic</label>
								<input type="topic" name="topic" required />
							</div>
							<div className="input-group mb-0 w-75 mx-auto">
								<label htmlFor='formLink'>Google Form Link</label>
								<input type="formLink" name="formLink" required />
							</div>
							<div className="input-group w-75 mx-auto">
								<label htmlFor='date'>Date</label>
								<input type="text" readOnly value={formattedDate} name="date" />
							</div>
							<div className="input-group">
								<label for="className">Class </label>
								<select name="className" type="className">
									<option value="5">Class 5</option>
									<option value="6">Class 6</option>
									<option value="7">Class 7</option>
									<option value="8">Class 8</option>
									<option value="9">Class 9</option>
									<option value="10">Class 10</option>
								</select>
							</div>
							<div className="input-group">
								<label for="batch">Batch </label>
								<select name="batch" type='batch'>
									<option value="bangla">Bangla Medium</option>
									<option value="english">English Medium</option>
								</select>
							</div>
							<div className="input-group">
								<label for="group">Group </label>
								<select name="group" type='group'>
									<option value="under9">No Group Yet</option>
									<option value="science">Science</option>
									<option value="commerce">Commerce</option>
								</select>
							</div>
							<input className='form-submit button-33 w-25 mx-auto' type="submit" required value="Set Quiz" />
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default SetExams;