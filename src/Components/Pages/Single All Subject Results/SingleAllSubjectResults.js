import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SingleAllSubjectResults = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const { allResult, setAllResult } = props;
	const { name, className, batch, group, subject, topic, mark, fmark, _id, date, highest, attendance } = props.res;
	const navigate = useNavigate();

	const goTo = (path) => {
		navigate(path);
	}

	console.log(props.res);

	const deleteRecord = () => {
		const url = `https://infinite-cliffs-52841.herokuapp.com/results?id=${_id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount > 0) {
					const remaining = allResult.filter(item => item._id !== _id);
					toast.success('Successfully Deleted');
					setAllResult(remaining);
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
						{name}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Batch {batch}</h4>
					<h4>Group {group}</h4>
					<h5>{subject}</h5>
					<h5>{topic}</h5>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={() => deleteRecord()}>Delete Result</button>
				</Modal.Footer>
			</Modal>
		);
	}
	return (
		<div className='p-3'>
			<div className='card mx-auto w-100 d-flex justify-content-center align-items-center'>
				<h1>{name}</h1>
				<h2>{subject}</h2>
				<h2>{topic}</h2>
				{
					attendance === 'present' && <h3>Mark: <span className='text-danger'>{mark} / {fmark}</span></h3>
				}
				{
					attendance === 'absent' && <h3>Mark: <span className='text-danger'>{attendance.toUpperCase()}</span></h3>
				}
				<h3>Highest: <span className='text-danger'>{highest}</span></h3>
				<h4>{date}</h4>
				<button className='button-87 my-3' onClick={() => goTo(`/updateResult/${_id}`)}>Update Result</button>
				<button className='button-87 mb-3' variant="primary" onClick={() => setModalShow(true)}>
					Delete Result
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

export default SingleAllSubjectResults;