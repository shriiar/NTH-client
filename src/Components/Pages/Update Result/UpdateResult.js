import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import addImg from '../../../img/updateStudent.png';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import './UpdateResult.css';

const UpdateResult = () => {
	const _id = useParams();
	const [student, setStudent] = useState([]);
	// console.log(_id._id);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/updateResult/${_id._id}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [])

	// console.log(student);

	const EventSubmit = (event) => {
		event.preventDefault();

		const newItem = {
			name: student[0]?.name,
			mark: event.target.mark.value,
			batch: student[0]?.batch,
			className: student[0]?.className,
			date: student[0]?.date,
			email: student[0]?.email,
			fmark: student[0]?.fmark,
			group: student[0]?.group,
			highest: student[0]?.highest,
			subject: student[0]?.subject,
			subjectCode: student[0]?.subjectCode,
			topic: student[0]?.topic,
			attendance: event.target.attendance.value
		};

		// console.log(newItem);
		const url = `${process.env.REACT_APP_URL}/updateResult/${_id._id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newItem)
		})
			.then(res => res.json())
			.then(result => {
				toast.success(`Result Updated`)
			})
		event.target.reset();
	};

	const EventSubmitHighest = (event) => {
		event.preventDefault();
		const newItem = {
			highest: event.target.highest.value,
		};
		// console.log(newItem);
		const url = `${process.env.REACT_APP_URL}/updateHighest?&className=${student[0]?.className}&batch=${student[0]?.batch}&group=${student[0]?.group}&subjectCode=${student[0]?.subjectCode}&date=${student[0]?.date}&highest=${newItem?.highest}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newItem)
		})
			.then(res => res.json())
			.then(result => {
				toast.success(`Result Updated`)
			})
		event.target.reset();
	};

	return (
		<div>
			<HelmetTitle title='Update Result'></HelmetTitle>
			<div style={{ margin: "0 0 400px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add w-100">
						<div class="login">Update Obtained Mark</div>
						<img src={addImg} className='img-fluid' alt="" />
					</div>

					<div class="right-add-id d-flex align-items-center justify-content-center">
						<form onSubmit={EventSubmit} className="w-100">
							<div className="input-group">
								<label for="attendance">Attendance: </label>
								<select name="attendance" type='attendance'>
									<option value="present">Present</option>
									<option value="absent">Absent</option>
								</select>
							</div>
							<div className="input-group w-75 mx-auto">
								<label htmlFor='mark'>Obtained Mark</label>
								<input type="text" name="mark" required />
							</div>
							<input className='form-submit button-33 w-50 mx-auto mt-4' type="submit" required value="Update" />
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
			<div style={{ margin: "0 0 1050px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add w-100">
						<div class="login">Update Highest Mark</div>
						<img src={addImg} className='img-fluid' alt="" />
					</div>

					<div class="right-add-id d-flex align-items-center justify-content-center">
						<form onSubmit={EventSubmitHighest} className="w-100">
							<div className="input-group w-75 mx-auto">
								<label htmlFor='highest'>Highest Mark</label>
								<input type="text" name="highest" required />
							</div>
							<input className='form-submit button-33 w-50 mx-auto mt-4' type="submit" required value="Update" />
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default UpdateResult;