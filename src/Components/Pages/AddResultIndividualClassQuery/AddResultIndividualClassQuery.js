import React, { useRef } from 'react';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import './AddResultIndividualClassQuery.css';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';
import { ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const AddResultIndividualClassQuery = () => {
	const { className, batch, group } = useParams();
	const navigate = useNavigate();
	const subjectNameRef = useRef("");
	const EventSubmit = (event) => {
		event.preventDefault();

		localStorage.removeItem('resultQuery');

		const resultQuery = { subject: event.target.subject.value, topic: event.target.topic.value, fullMarks: event.target.fullMarks.value };
		localStorage.setItem('resultQuery', JSON.stringify(resultQuery));

		console.log(resultQuery);

		navigate(`/addResultIndividualClass/${className}/${batch}/${group}`);
	}
	return (
		<div>
			<HelmetTitle title='Add To Inventory'></HelmetTitle>
			<div style={{ margin: "0 0 1050px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add">
						<div class="login">Select Catagories</div>
						<img src={addImg} className='img-fluid' alt="" />
					</div>

					<div class="right-add d-flex align-items-center justify-content-center">
						<form onSubmit={EventSubmit} className="w-100">
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
							<div className="input-group w-75 mx-auto">
								<label htmlFor='topic'>Topic Name</label>
								<input type="text" name="topic" required />
							</div>
							<div className="input-group w-75 mx-auto">
								<label htmlFor='fullMarks'>Full Marks</label>
								<input type="number" min={0} name="fullMarks" required />
							</div>
							<input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" required value="Go To Add Result" />
						</form>
					</div>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default AddResultIndividualClassQuery;