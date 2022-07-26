import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './SingleStudent.css'

const SingleStudent = (props) => {

	const navigate = useNavigate();
	const [modalShow, setModalShow] = useState(false);

	const { allStudents, setAllStudents } = props;
	const { name, father, mother, className, batch, group, email, _id, img, userId } = props.student;
	const updateStudent = () => {
		navigate(`/updateStudent/${email}/${_id}`);
	}

	const deleteStudent = () => {
		const url = `${process.env.REACT_APP_URL}/students?className=${className}&batch=${batch}&group=${group}&name=${name}&father=${father}&mother=${mother}&email=${email}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				if (data.deletedCount > 0) {
					const remaining = allStudents.filter(item => item._id !== _id);
					toast.success('Successfully Deleted');
					setAllStudents(remaining);
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
				</Modal.Body>
				<Modal.Footer>
					<button className='button-87' onClick={() => deleteStudent()}>Delete Profile</button>
				</Modal.Footer>
			</Modal>
		);
	}
	return (
		<div className='p-3'>
			<div className='card-sub border-0 mb-3'>
				{
					img && <img src={img} className='w-100 card__image' alt="Student Image" />
				}
				<div class="card__overlay">
					<div class="card__header">
						<div class="card__header-text fs-1">
							<h3 class="card__title text-white">{name}</h3>
						</div>
					</div>
					<p className="card__description pb-2 fs-3 text-white text-start">ID: {userId}</p>
					<p className="card__description pb-2 fs-3 text-white text-start">Email: {email}</p>
					<p className="card__description pb-2 fs-3 text-white text-start">Class: {className}</p>
					<p className="card__description pb-2 fs-3 text-white text-start">Batch: {batch.toUpperCase()}</p>
					<p className="card__description pb-2 fs-3 text-white text-start">Group: {group.toUpperCase()}</p>
					<div className="row justify-content-center">
						<div className='col-6 d-flex flex-column justify-content-center'>
							<Button onClick={() => updateStudent()} className='mb-2 button-87'>Update Profile</Button>
							<Button variant="primary" className='mb-3 button-87' onClick={() => setModalShow(true)}>
								Delete Profile
							</Button>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer></ToastContainer>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div >
	);
};

export default SingleStudent;