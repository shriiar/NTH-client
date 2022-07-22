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
import cover from '../../../img/cover.jpg';
import { signOut } from 'firebase/auth';
import empty from '../../../img/empty.jpg';


const Student = () => {

	const [student, setStudent] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [result, setResult] = useState([]);
	const [user] = useAuthState(auth);

	const [image, setImage] = useState({});
	const [filename, setFilename] = useState('Choose File');
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState('');
	const [uploadPercentage, setUploadPercentage] = useState(0);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, [])

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
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
		fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => setStudent(data))
	}, [user])

	useEffect(() => {
		fetch(`https://infinite-cliffs-52841.herokuapp.com/resultsOfAll?email=${user?.email}`, {
			method: 'GET',
			headers: {
				'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
			}
		})
			.then(res => res.json())
			.then(data => {
				const match = data.filter(item => (item.subjectCode.toLowerCase().includes(searchText.toLowerCase())) || item.topic.toLowerCase().includes(searchText.toLowerCase()) || item.date.toLowerCase().includes(searchText.toLowerCase()));
				setResult(match);
			})
	}, [searchText, user.email])

	// console.log(result);

	let absent = 0;
	for (let item in result) {
		// console.log(result[item]);
		if (result[item].attendance === 'absent') {
			absent += 1;
			console.log("gg", absent);
		}
	}

	console.log(absent);

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
							fetch(`https://infinite-cliffs-52841.herokuapp.com/students/${updateProfile.email}`, {
								method: 'PUT',
								headers: {
									'content-type': 'application/json'
								},
								body: JSON.stringify(updateProfile)
							})
								.then(res => res.json())
								.then(data => {

									fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
										method: 'GET',
										headers: {
											'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
										}
									})
										.then(res => res.json())
										.then(data => setStudent(data))

									// console.log(data);
									// console.log(updateProfile);

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

	// console.log(student[0]);

	return (
		<div className='mx-auto'>
			<div>
				<HelmetTitle title={'My Profile'}></HelmetTitle>
				<img src={cover} className='img-fluid w-100' alt="" />
				<div className='myPortfolio text-start'>
					<div class="portfoliocard-user">
						<div class="coverphoto-user"></div>
						<div className='w-100'>
							<div class="profile_picture-user mx-auto" style={{
								backgroundImage: `url(${student[0]?.img})`
							}}></div>
						</div>
						<div class="left_col-user">
							<div className='following-user'>
								<h1 className='text-upload my-5'>Upload Your Photo</h1>
								<Fragment>
									{message ? <Message msg={message} /> : null}
									<form className='w-75' onSubmit={onSubmit}>
										<div className='custom-file mb-4'>
											<input
												type='file'
												className='custom-file-input'
												id='customFile'
												name='imgFile'
												onChange={onChange}
											/>
										</div>

										<Progress percentage={uploadPercentage} />

										<input
											type='submit'
											value='Upload'
											className='button bg-success mt-4 mx-auto h-100'
										/>
									</form>
								</Fragment>
							</div>
						</div>
						<div data-aos='fade-left' class="right_col-user">
							<h2 class="name-user text-upload">{student[0]?.name}</h2>
							<h3 class="location-user text-upload">{student[0]?.email}</h3>
							<h3 class="location-user">Class: <span className='text-upload'>{student[0]?.className}</span></h3>
							<h3 class="location-user">Batch: <span className='text-upload'>{student[0]?.batch.toUpperCase()}</span></h3>
							{
								(student[0]?.className === '9' || student[0]?.className === '10') && <h3 class="location-user">Group: <span className='text-upload'>{student[0]?.group.toUpperCase()}</span>
								</h3>
							}
							<h3 class="location-user">Informations:</h3>
							<div className='row ps-5'>
								<div className="col-12 text-upload fw-bold">{student[0]?.father}</div>

								<div className="col-12 text-upload fw-bolder">{student[0]?.mother}</div>
								<div className="col-12 text-upload fw-bold">{student[0]?.phone}</div>
								<div className="col-12 text-upload fw-bold">{student[0]?.adress}</div>
							</div>
							<h3 class="location-user">Exams:</h3>
							<div className='row ps-5'>
								<div className="col-12 text-upload fw-bold">Total Exam: {result.length}</div>
								<div className="col-12 text-upload fw-bolder">Exam Taken: {result.length - absent}</div>
								<div className="col-12 text-upload fw-bold">Missed Exam: {absent}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 className='text-center shop-header container mt-5'>Search Results</h1>
				<div className=''>
					<input id='input-text' onChange={textChange} className='my-5 text-dark' type="text" placeholder='Search..' />
				</div>
				{
					result.length === 0 && <>
						<h1 className='mt-5'>You have no subject results at the moment</h1>
						<img src={empty} className='img-fluid' width='900px' alt="" style={{ margin: "0 0 0 100px" }} />
					</>
				}
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5'>
					{
						result.slice(0).reverse().map(item => <StudentResults key={item._id} item={item}></StudentResults>)
					}
				</div>
			</div>
			<ToastContainer></ToastContainer>
		</div >
	);
};

export default Student;