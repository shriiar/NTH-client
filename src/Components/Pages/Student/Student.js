import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import StudentResults from '../StudentResults/StudentResults';
import Message from './Message';
import Progress from './Progress';
import './Student.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Student = () => {

	const [student, setStudent] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [result, setResult] = useState([]);
	const [user] = useAuthState(auth);
	let flag = 0;

	const [image, setImage] = useState({});
	const [filename, setFilename] = useState('Choose File');
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState('');
	const [uploadPercentage, setUploadPercentage] = useState(0);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

	useEffect(() => {
		fetch(`http://localhost:5000/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])

	useEffect(() => {
		fetch(`http://localhost:5000/resultsOfAll?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				const match = data.filter(item => item.subjectCode.toLowerCase().includes(searchText.toLowerCase()));
				setResult(match);
			})
	}, [searchText, user.email])

	console.log(result);

	const imageStorageKey = 'f3e7e3f9cefdf2232b287f54b64bea6e';

	const onChange = e => {
		setImage(e.target.files[0]);
		setFilename(e.target.files[0].name);
		e.target.value = null;
	};

	const onSubmit = async e => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('image', image);

		if (image.name === undefined) {
			toast.error('Please upload your image');
			return;
		}

		const res = await axios.post('/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			onUploadProgress: progressEvent => {
				setUploadPercentage(
					parseInt(
						Math.round((progressEvent.loaded * 100) / progressEvent.total)
					)
				);
				const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
				fetch(url, {
					method: 'POST',
					body: formData
				})
					.then(res => res.json())
					.then(result => {
						console.log(result);
						if (result.success) {
							const img = result.data.url;
							console.log(img);
							toast.success('Image uploaded');
							setFilename('Choose File');
							setImage({});

							const updateProfile = {
								name: student[0]?.name,
								father: student[0]?.father,
								mother: student[0]?.mother,
								className: student[0]?.className,
								batch: student[0]?.batch,
								group: student[0]?.group,
								email: student[0]?.email,
								img: img,
								paid: student[0]?.paid,
								lastPaid: student[0]?.lastPaid,
								due: student[0]?.due,
								payMonth: student[0]?.payMonth,
								payYear: student[0]?.payYear
							}
							fetch(`http://localhost:5000/students/${updateProfile.email}`, {
								method: 'PUT',
								headers: {
									'content-type': 'application/json'
								},
								body: JSON.stringify(updateProfile)
							})
								.then(res => res.json())
								.then(data => {

									fetch(`http://localhost:5000/students?email=${user?.email}`, {
										method: 'GET',
										headers: {
											'authorization': `Bearer ${localStorage.getItem('accessToken')}`
										}
									})
										.then(res => res.json())
										.then(data => setStudent(data))

									console.log(data);
									console.log(updateProfile);

									setTimeout(() => setUploadPercentage(0), 10000);
									const { fileName, filePath } = res.data;
									setUploadedFile({ fileName, filePath });
									setMessage('File Uploaded');
								})
						}
					})
			}
		});
	};

	const textChange = (event) => { // getting search result
		console.log(event.target.value);
		setSearchText(event.target.value);
	}

	console.log(student[0]);

	return (
		<div className='mx-auto'>
			<div>
				<HelmetTitle title='My Portfolio'></HelmetTitle>
				<div className='myPortfolio'>
					<div class="portfoliocard-user text-start">
						<div class="coverphoto-user"></div>
						<div data-aos='fade-right' class="profile_picture-user" style={{
							backgroundImage: `url(${student[0]?.img})`
						}}></div>
						<div data-aos='fade-right' className="following-user mt-5">
							<div className="follow_count-user" style={{ margin: "100px 0 0 0" }}>{student[0]?.name}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">{student[0]?.email}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">ID: {student[0]?.userId}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">Class: {student[0]?.className}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">Batch: {student[0]?.batch}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">Group: {student[0]?.group}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">Father's Name: {student[0]?.father}</div>
						</div>
						<div data-aos='fade-left' className="following-user">
							<div className="follow_count-user">Mother's Name: {student[0]?.mother}</div>
						</div>

						<div data-aos='fade-left' className='row'>
							<div className="col-12 mt-4">
								{
									student[0]?.due !== null ? <div data-aos='fade-left' className="following-user">
										<div className="follow_count-user">Mother's Name: {student[0]?.mother}</div>
									</div>
										:
										<div data-aos='fade-left' className="following-user">
											<div className="follow_count-user">Due: Payment Clear</div>
										</div>
								}
							</div>
							<div className="col-12">
								<div data-aos='fade-left' className="following-user">
									<div className="follow_count-user">Last paid: {student[0]?.lastPaid}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-auto w-50'>
				<Fragment>
					{message ? <Message msg={message} /> : null}
					<form onSubmit={onSubmit}>
						<div className='custom-file mb-4'>
							<input
								type='file'
								className='custom-file-input'
								id='customFile'
								name='imgFile'
								onChange={onChange}
							/>
							<label className='custom-file-label' htmlFor='customFile'>
								{filename}
							</label>
						</div>

						<Progress percentage={uploadPercentage} />

						<input
							type='submit'
							value='Upload'
							className='btn btn-primary btn-block mt-4'
						/>
					</form>
				</Fragment>
			</div>
			<h1 className='text-center shop-header container mt-5'>Search Results</h1>
			<div className=''>
				<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
				{
					result.slice(0).reverse().map(item => <StudentResults key={item._id} item={item}></StudentResults>)
				}
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Student;