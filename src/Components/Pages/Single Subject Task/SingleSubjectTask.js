import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const SingleSubjectTask = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const { className, batch, group, name, subject, subjectCode, videoUrl, _id, date } = props.item;
	const { task, setTask } = props;
	const deleteTask = () => {
		const url = `${process.env.REACT_APP_URL}/subWAcc?id=${_id}`;
		// console.log(url);
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				if (data.deletedCount > 0) {
					const remaining = task.filter(item => item._id !== _id);
					toast.success('Successfully Deleted');
					setTask(remaining);
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
						{subject.toUpperCase()}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Batch: {batch.toUpperCase()}</h4>
					<h4>Group: {group.toUpperCase()}</h4>
					<h4>
						Topic: <span className='text-danger'>{name.toUpperCase()}</span>
					</h4>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={() => deleteTask()} className='mb-3 button-87'>Delete {name}</button>
				</Modal.Footer>
			</Modal>
		);
	}

	return (
		<div className='border-0 p-5'>
			<iframe className='w-100' src={videoUrl} width="400" height="400" allow="autoplay"></iframe>
			<h1>{name}</h1>
			<h3>{subject}</h3>
			<h4>{date}</h4>
			<button className='button-87 mx-auto' variant="primary" onClick={() => setModalShow(true)}>
				Delete Record
			</button>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			<ToastContainer/>
		</div>
	);
};

export default SingleSubjectTask;