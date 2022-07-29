import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './SingleID.css';

const SingleID = ({item, ID, setID}) => {

	const [modalShow, setModalShow] = useState(false);
	const deleteExam = () => {
		const url = `${process.env.REACT_APP_URL}/${process.env.REACT_APP_GG}?id=${item._id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount > 0) {
					const remaining = ID.filter(items => items._id !== item._id);
					toast.success('Successfully Deleted');
					setID(remaining);
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
						ID: {item.nameID}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				</Modal.Body>
				<Modal.Footer>
					<button className='button-87' onClick={() => deleteExam()}>Delete ID</button>
				</Modal.Footer>
			</Modal>
		);
	}
	return (
		<div className='p-5'>
			<div className='card mx-auto w-100 h-100 justify-content-center'>
				<h1>ID: <span className='text-danger'>{item.nameID}</span></h1>
				<button className='button-87' variant="primary" onClick={() => setModalShow(true)}>
					Delete ID
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

export default SingleID;