import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import './AddImage.css';
import addImg from '../../../img/updateStudent.png';
import Message from '../Student/Message';
import Progress from '../Student/Progress';

const AddImage = () => {

	const [image, setImage] = useState({});
	const [filename, setFilename] = useState('Choose File');
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState('');
	const [uploadPercentage, setUploadPercentage] = useState(0);

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
								img: img,
							}
							fetch(`https://infinite-cliffs-52841.herokuapp.com/images`, {
								method: 'POST',
								headers: {
									'content-type': 'application/json'
								},
								body: JSON.stringify(updateProfile)
							})
								.then(res => res.json())
								.then(data => {

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

	const EventSubmit = async (event) => {
		event.preventDefault();
		const notice = {
			title: event.target.titleText.value,
			description: event.target.noticeText.value,
			date: event.target.date.value,
			className: event.target.className.value,
			batch: event.target.batch.value,
			group: event.target.group.value,
		}
		// console.log(notice);
		let toastText = `Class ${notice.className} Batch ${notice.batch} Group ${notice.group}`

		fetch('https://infinite-cliffs-52841.herokuapp.com/notice', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(notice)
		})
			.then(res => res.json())
			.then(data => {
				toast(`Notice Added for ${toastText}`)
			});
		event.target.reset();

	};

	return (
		<div>
			<HelmetTitle title={'Add Image'}></HelmetTitle>
			<div style={{ margin: "0 0 1050px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add">
						<div class="login">Add Image</div>
						<img src={addImg} className='img-fluid' alt="" />
					</div>

					<div class="right-add-id d-flex align-items-center justify-content-center">
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
									className='button-87 bg-success mt-4 mx-auto h-100'
								/>
							</form>
						</Fragment>
					</div>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default AddImage;