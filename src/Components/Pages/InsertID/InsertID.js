import { format } from 'date-fns';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';
import './InsertID.css';

const InsertID = () => {
	const [date, setDate] = useState(new Date());
	const formattedDate = format(date, 'PP');

	const EventSubmit = (event) => {
		event.preventDefault();

		const newItem = {
			nameID: event.target.nameID.value
		};

		console.log(newItem);
		const url = `https://infinite-cliffs-52841.herokuapp.com/studentID`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newItem)
		})
			.then(res => res.json())
			.then(result => {
				if (result.success) {
					toast.success(`ID ${newItem.nameID} Has Been Added`)
				}
				else {
					toast.error(`ID Already Exist`);
				}
			})
		event.target.reset();
	};

	return (
		<div>
			<HelmetTitle title='Insert Student ID'></HelmetTitle>
			<div style={{ margin: "0 0 1050px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add">
						<div class="login">Add Student ID</div>
						<img src={addImg} className='img-fluid' alt="" />
					</div>

					<div class="right-add-id d-flex align-items-center justify-content-center">
						<form onSubmit={EventSubmit} className="w-100">
							<div className="input-group w-75 mx-auto">
								<label htmlFor='name'>Insert Student ID</label>
								<input type="text" name="nameID" required />
							</div>
							<input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" required value="Submit" />
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default InsertID;