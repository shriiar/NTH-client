import React from 'react';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/updateStudent.png';
import './AddPinnedPost.css';
import { toast, ToastContainer } from 'react-toastify';

const AddPinnedPost = () => {

	const EventSubmit = (event) => {
		event.preventDefault();

		const newItem = {
			post: event.target.post.value
		};

		console.log(newItem);
		const url = `${process.env.REACT_APP_URL}/pinnedPosts`;
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newItem)
		})
			.then(res => res.json())
			.then(result => {
				toast.success(`Post Has Been Added`)
			})
		event.target.reset();
	};

	return (
		<div>
			<HelmetTitle title='Add Pinned Post'></HelmetTitle>
			<div style={{ margin: "0 0 1050px 0" }} class="page-add">
				<div class="container-add">
					<div class="left-add">
						<div class="login">Add Pinned Post</div>
						<img src={addImg} className='img-fluid w-100' alt="" />
					</div>

					<div class="right-add-id d-flex align-items-center justify-content-center">
						<form onSubmit={EventSubmit} className="w-100">
							<div className="input-group w-75 mx-auto">
								<label htmlFor='post'>Add Post</label>
								<textarea type="text" name="post" required />
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

export default AddPinnedPost;