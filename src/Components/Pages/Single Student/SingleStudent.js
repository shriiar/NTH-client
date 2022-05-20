import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SingleStudent = (props) => {

    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);

    const { allStudents, setAllStudents } = props;
    const { name, father, mother, className, batch, group, email, _id, img } = props.student;
    const updateStudent = () => {
        navigate(`/updateStudent/${email}/${_id}`);
    }

    const deleteStudent = () => {
        const url = `http://localhost:5000/students?className=${className}&batch=${batch}&group=${group}&name=${name}&father=${father}&mother=${mother}&email=${email}`;
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
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => deleteStudent()}>Delete {name}'s Profile</button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <div className='row'>
            <div className='col-6 d-flex flex-column justify-content-center'>
                {
                    img && <img src={img} className='w-25 mx-auto my-2' alt="Student Image" />
                }
                <h1>{name}</h1>
                <h2>Father's Name: {father}</h2>
                <h2>Mothers's Name: {mother}</h2>
                <h3>Class: {className}</h3>
                <h3>Batch: {batch}</h3>
                <h3>Group: {group}</h3>
                <h3>{email}</h3>
            </div>
            <div className='col-6 d-flex flex-column justify-content-center'>
                <button onClick={() => updateStudent()} className='mb-5'>Update {name}'s Profile</button>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Delete {name}'s Profile
                </Button>
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