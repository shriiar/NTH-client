import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './SinglePost.css';

const SinglePost = ({ item, posts, setPosts }) => {
	const [modalShow, setModalShow] = useState(false);
	const deleteExam = () => {
		const url = `https://infinite-cliffs-52841.herokuapp.com/pinnedPosts?id=${item._id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount > 0) {
					const remaining = posts.filter(items => items._id !== item._id);
					toast.success('Successfully Deleted');
					setPosts(remaining);
				}
			})
	}
	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				</Modal.Body>
				<Modal.Footer>
					<button className='button-87' onClick={() => deleteExam()}>Delete Pinned Post</button>
				</Modal.Footer>
			</Modal>
		);
	}
	return (
		<div className='p-5'>
			<div className='card mx-auto w-100 h-100 justify-content-center'>
				<p className='fw-bold text-danger fs-6 fw-bold'>{item.post}</p>
				<button className='button-87' variant="primary" onClick={() => setModalShow(true)}>
					Delete Pinned Post
				</button>
			</div>
			<ToastContainer></ToastContainer>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
};

export default SinglePost;