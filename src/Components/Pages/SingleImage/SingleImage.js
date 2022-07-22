import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const SingleImage = ({ item, images, setImages }) => {

	const [modalShow, setModalShow] = useState(false);
	const deleteExam = () => {
		const url = `https://infinite-cliffs-52841.herokuapp.com/images?id=${item._id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount > 0) {
					const remaining = images.filter(items => items._id !== item._id);
					toast.success('Successfully Deleted');
					setImages(remaining);
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
						<img src={item.img} className='img-fluid' alt="" />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				</Modal.Body>
				<Modal.Footer>
					<button className='button-87' onClick={() => deleteExam()}>Delete Image</button>
				</Modal.Footer>
			</Modal>
		);
	}

	return (
		<div className='p-5'>
			<div className='card w-100 h-100 justify-content-canter mx-auto'>
				<img src={item.img} className='img-fluid w-100 h-100' alt="" />
				<button className='button-87 my-4' variant="primary" onClick={() => setModalShow(true)}>
					Delete Image
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

export default SingleImage;